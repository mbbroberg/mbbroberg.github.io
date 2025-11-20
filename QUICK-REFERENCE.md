# Quick Reference: Obsidian → Hugo Publishing

## Folder Structure Mapping

| Obsidian Vault | Hugo Content | URL |
|----------------|--------------|-----|
| `Garden/Philosophy-Psychology/` | `content/garden/philosophy-psychology/` | `/garden/philosophy-psychology/` |
| `Garden/Product-Management/` | `content/garden/product-management/` | `/garden/product-management/` |
| `Garden/Writing-and-Inspiration/` | `content/garden/writing-and-inspiration/` | `/garden/writing-and-inspiration/` |
| `Garden/AI-Learning/` | `content/garden/ai-learning/` | `/garden/ai-learning/` |

## Required Frontmatter Template

```yaml
---
share: true
title: Your Note Title
slug: /category/filename
tags:
  - your-first-tag
  - your-second-tag
date: 2025-01-15
type: garden
state: seed
---
```

## Frontmatter Field Reference

| Field | Required | Purpose | Example Values |
|-------|----------|---------|----------------|
| `share` | ✅ Yes | Tells Enveloppe to publish | `true` or `false` |
| `title` | ✅ Yes | Page title | `"Cognitive Frames"` |
| `slug` | ✅ Yes | URL path | `/philosophy-psychology/cognitive-frames` |
| `tags` | ⚠️ Recommended | Breadcrumb navigation | `[cognitive-frames, product-thinking]` |
| `date` | ⚠️ Recommended | Publication date | `2025-01-15` |
| `type` | ⚠️ Recommended | Content type | `garden` or `article` |
| `state` | ⚠️ Recommended | Growth stage | `seed`, `sprout`, or `rhizome` |
| `aliases` | ❌ Optional | URL redirects | `["/garden/old-filename/"]` |

## Enveloppe Commands

| Command | Keyboard Shortcut | Use When |
|---------|-------------------|----------|
| Upload single current active note | Right-click menu | Publishing one note |
| Upload unpublished notes | Cmd/Ctrl + P | Publishing multiple new notes |
| Refresh published and upload new notes | Cmd/Ctrl + P | Updating existing + adding new |
| Refresh all published notes | Cmd/Ctrl + P | Updating all published notes |
| Purge depublished and deleted files | Cmd/Ctrl + P | Cleaning up removed notes |

## Growth States

| State | Icon | Meaning | When to Use |
|-------|------|---------|-------------|
| `seed` | 🌱 | New, early-stage thoughts | Just started exploring an idea |
| `sprout` | 🌿 | Developing ideas with connections | Idea is growing, has some links |
| `rhizome` | 🫚 | Mature, interconnected concepts | Well-developed, highly connected |

## Tag Categories (for Breadcrumbs)

Your **first tag** determines the breadcrumb navigation. Choose from:

- `cognitive-frames` - Language, metaphor, framing
- `platform-product` - Platform product management
- `product-thinking` - General product management
- `team-topologies` - Team design and organization
- `inspirations` - Quotes, art, literature
- `thoughts` - Personal reflections
- `myths` - Stories and mythology

## Slug Patterns by Category

| Category | Slug Pattern | Example |
|----------|--------------|---------|
| Philosophy-Psychology | `/philosophy-psychology/filename` | `/philosophy-psychology/cognitive-frames` |
| Product-Management | `/product-management/filename` | `/product-management/platform-product` |
| Writing-and-Inspiration | `/writing-and-inspiration/filename` | `/writing-and-inspiration/goyas-saturn` |
| AI-Learning | `/ai-learning/filename` | `/ai-learning/prompt-engineering` |

## Common Workflows

### Publishing a New Note

1. Create note in appropriate folder (e.g., `Garden/Philosophy-Psychology/`)
2. Add frontmatter with `share: true`
3. Add at least one tag
4. Right-click → "Upload single current active note"
5. Wait for GitHub Actions to build (check GitHub)
6. Visit your site to verify

### Updating an Existing Note

1. Edit the note in Obsidian
2. Save changes
3. Run "Refresh published and upload new notes"
4. Verify changes on your site

### Unpublishing a Note

1. Change `share: true` to `share: false`
2. Run "Purge depublished and deleted files"
3. Note will be removed from your site

### Moving a Note to a Different Category

1. Move the file in Obsidian to the new folder
2. Update the `slug` field to match new category
3. Add an `aliases` entry for the old URL
4. Run "Refresh published and upload new notes"

Example:
```yaml
---
share: true
title: My Note
slug: /product-management/my-note  # New location
aliases:
  - /philosophy-psychology/my-note  # Old location
tags:
  - product-thinking
---
```

## Troubleshooting Checklist

- [ ] `share: true` is set in frontmatter
- [ ] `slug` matches folder structure (e.g., `/philosophy-psychology/filename`)
- [ ] At least one tag is defined (for breadcrumbs)
- [ ] File is in the correct Obsidian folder
- [ ] GitHub token is valid and has `repo` scope
- [ ] No merge conflicts on GitHub
- [ ] GitHub Actions workflow completed successfully

## Local Testing

Before publishing, test locally:

```bash
# Start Hugo development server
hugo serve

# Visit http://localhost:1313 to preview
# Check breadcrumbs, links, and formatting
```

## Useful Links

- **Your Site**: https://mbbroberg.fun
- **GitHub Repo**: https://github.com/mbbroberg/mbbroberg.github.io
- **Enveloppe Docs**: https://enveloppe.ovh/
- **Full Setup Guide**: [OBSIDIAN-ENVELOPPE-SETUP.md](./OBSIDIAN-ENVELOPPE-SETUP.md)

---

**Pro Tip**: Create an Obsidian template with the frontmatter structure to speed up note creation!

