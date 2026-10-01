#!/bin/bash
set -euo pipefail

# Only run in Claude Code on the web
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

cd "${CLAUDE_PROJECT_DIR:-.}"

HUGO_VERSION=0.128.0
SASS_VERSION=1.77.8

# Hugo Extended (matches .github/workflows/hugo.yml)
if ! command -v hugo >/dev/null 2>&1 || ! hugo version | grep -q "v${HUGO_VERSION}.*extended"; then
  tmp="$(mktemp -d)"
  curl -fsSL -o "$tmp/hugo.tar.gz" \
    "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.tar.gz"
  tar -xzf "$tmp/hugo.tar.gz" -C "$tmp" hugo
  install -m 0755 "$tmp/hugo" /usr/local/bin/hugo
  rm -rf "$tmp"
fi

# Dart Sass
if ! command -v sass >/dev/null 2>&1; then
  tmp="$(mktemp -d)"
  curl -fsSL -o "$tmp/sass.tar.gz" \
    "https://github.com/sass/dart-sass/releases/download/${SASS_VERSION}/dart-sass-${SASS_VERSION}-linux-x64.tar.gz"
  tar -xzf "$tmp/sass.tar.gz" -C /opt
  ln -sf /opt/dart-sass/sass /usr/local/bin/sass
  rm -rf "$tmp"
fi

# go.mod requires a newer Go than the image ships. If the matching toolchain is
# already in the module cache, put it first on PATH (auto-download via go.dev
# may be blocked by the egress policy).
GO_REQ="$(awk '/^go /{print $2}' go.mod)"
GO_TC="$(go env GOMODCACHE 2>/dev/null || echo /root/go/pkg/mod)/golang.org/toolchain@v0.0.1-go${GO_REQ}.linux-amd64/bin"
if [ -x "$GO_TC/go" ]; then
  export PATH="$GO_TC:$PATH"
  if [ -n "${CLAUDE_ENV_FILE:-}" ]; then
    echo "export PATH=\"$GO_TC:\$PATH\"" >> "$CLAUDE_ENV_FILE"
  fi
fi

# Theme submodule (no-op if the theme is vendored in-tree)
git submodule update --init --recursive 2>/dev/null || true
