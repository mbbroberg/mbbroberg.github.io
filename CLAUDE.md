# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a personal website built with Hugo and the Anatole theme. The site features:
- A traditional blog at `/articles/` 
- A digital garden at `/garden/` with a unique growth-stage taxonomy (seed, sprout, rhizome)
- Automated deployment via GitHub Actions to GitHub Pages

## Development Commands

```bash
# Local development server
hugo serve

# Build for production (same as GitHub Actions)
hugo --minify

# Clean build directory
rm -rf public

# Update theme submodule
git submodule update --remote --merge themes/anatole

# Theme development (within themes/anatole/)
npm run dev    # Serve theme example site
npm run build  # Build theme resources
```

## Architecture

### Content Structure
- `content/articles/` - Blog posts with traditional chronological publishing
- `content/garden/` - Digital garden notes with growth-stage taxonomy
- `content/_index.md` - Homepage content
- `static/images/` - Static images referenced in posts

### Digital Garden System
The garden uses a unique three-stage growth taxonomy:
- **seed** 🌱 - New, early-stage thoughts
- **sprout** 🌿 - Developing ideas with some connections  
- **rhizome** 🫚 - Mature, interconnected concepts

Garden content is controlled by:
- `layouts/garden/list.html` - Custom layout with CSS-in-HTML for garden browsing
- Growth stage set via `state` frontmatter parameter
- Tag-based topic organization

### Theme and Styling
- Uses Anatole theme as a git submodule in `themes/anatole/`
- Custom CSS in `assets/css/custom.css` 
- Custom JS for dataview styling in `assets/js/dataview-styler.js`
- Dark mode default (`params.displayMode = "dark"`)

### Deployment
- Automated via `.github/workflows/hugo.yml`
- Builds with Hugo Extended v0.128.0 + Dart Sass
- Deploys to GitHub Pages on push to main branch
- CNAME configured for `mbbroberg.fun` domain

## Writing Workflow

Content is primarily written in Obsidian with the Enveloppe plugin for publishing. 

When adding content:
- Blog posts go in `content/articles/` with date-prefixed filenames
- Garden notes go in `content/garden/` with descriptive filenames  
- Images should be placed in `static/images/`
- Use Page Bundles (folder + index.md) for posts with multiple images

## Configuration

Key config files:
- `config/_default/config.toml` - Main Hugo configuration
- `config/_default/params.toml` - Theme parameters and social links
- `config/_default/menus.toml` - Navigation menu configuration

The site uses custom taxonomies for `garden` and `state` in addition to standard `tags`.