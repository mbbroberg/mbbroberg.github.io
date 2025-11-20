# Obsidian + Enveloppe Setup Guide

This guide explains how to configure your Obsidian vault and the Enveloppe plugin to work seamlessly with the nested folder structure of your Hugo digital garden.

## Overview

Your Hugo site uses a **nested folder structure** for garden content:
- `content/garden/philosophy-psychology/` - Philosophy and psychology notes
- `content/garden/product-management/` - Product management notes
- `content/garden/writing-and-inspiration/` - Writing and inspiration notes
- `content/garden/ai-learning/` - AI-related learning notes

The Enveloppe plugin will publish your Obsidian notes to these folders while preserving the structure.

## Obsidian Vault Organization

### Recommended Folder Structure

Organize your Obsidian vault to mirror the Hugo folder structure:

```
Your Obsidian Vault/
├── Garden/
│   ├── Philosophy-Psychology/
│   │   ├── cognitive-frames.md
│   │   ├── enactivism.md
│   │   └── ...
│   ├── Product-Management/
│   │   ├── platform-product.md
│   │   ├── team-topologies.md
│   │   └── ...
│   ├── Writing-and-Inspiration/
│   │   ├── myths.md
│   │   ├── quotes.md
│   │   └── ...
│   └── AI-Learning/
│       └── prompt-engineering.md
└── Articles/
    └── blog-posts.md
```

### Why This Structure?

1. **Visual Organization**: Helps you identify thematic gaps in your thinking (as you mentioned)
2. **Enveloppe Compatibility**: The plugin will preserve this folder structure when publishing
3. **Hugo Compatibility**: Matches your Hugo site's content organization
4. **Tag-Based Navigation**: Works with your new tag-based breadcrumb system

## Enveloppe Plugin Configuration

### 1. Basic GitHub Settings

In Obsidian, go to **Settings → Enveloppe** and configure:

- **GitHub Username**: `mbbroberg`
- **Repository Name**: `mbbroberg.github.io`
- **Branch**: `main` (or your preferred branch)
- **GitHub Token**: Generate from [GitHub Settings → Developer Settings → Personal Access Tokens](https://github.com/settings/tokens)
  - Required scopes: `repo` (full control of private repositories)

### 2. Folder Path Settings

Configure how Enveloppe maps your Obsidian folders to Hugo content folders:

**Root Folder in Repository**: `content`

This tells Enveloppe to publish files into the `content/` directory of your Hugo site.

### 3. Folder Note Settings

If you use folder notes (index files for each category):

- **Folder Note Name**: `_index` (Hugo's convention for section pages)
- **Enable Folder Notes**: ✅ (if you want category index pages)

**Note**: Since you removed category `_index.md` files in favor of tag pages, you may want to **disable** folder notes.

### 4. File Path Settings

**Important**: Configure Enveloppe to preserve your folder structure:

- **Default Folder**: Leave empty (to preserve folder structure)
- **Folder Behavior**: `Preserve folder structure` or `Use frontmatter path`

### 5. Frontmatter Configuration

Each note should have frontmatter like this:

```yaml
---
share: true
title: Your Note Title
slug: /category/filename
tags:
  - cognitive-frames
  - product-thinking
date: 2025-01-15
type: garden
state: sprout
---
```

**Key Fields**:
- `share: true` - Required for Enveloppe to publish the note
- `slug: /category/filename` - Defines the URL path (matches your nested structure)
- `tags: []` - Used for tag-based breadcrumb navigation
- `type: garden` - Identifies this as garden content (not a blog article)
- `state: seed|sprout|rhizome` - Growth stage for your digital garden

### 6. Link Conversion Settings

Configure how Enveloppe handles wikilinks:

- **Convert Wikilinks to Markdown**: ✅ Enabled
- **Link Path**: `Relative` (recommended for Hugo)
- **Internal Link Processing**: `Convert to markdown links`

### 7. Content Conversion Settings

- **Dataview Queries**: ✅ Enabled (if you use Dataview plugin)
- **Callouts**: ✅ Enabled (Hugo supports callouts)
- **Mermaid Diagrams**: ✅ Enabled
- **Math/LaTeX**: ✅ Enabled (if you use mathematical notation)

## Publishing Workflow

### Step 1: Organize Your Note

1. Create or edit a note in the appropriate folder (e.g., `Garden/Philosophy-Psychology/`)
2. Add required frontmatter (especially `share: true`)
3. Add at least one tag (for breadcrumb navigation)

### Step 2: Publish with Enveloppe

Use one of these commands (Cmd/Ctrl + P):

- **Upload single current active note** - Publish the current note
- **Upload unpublished notes** - Publish all notes with `share: true` that haven't been published yet
- **Refresh published and upload new notes** - Update existing notes and publish new ones

### Step 3: Verify on GitHub

1. Enveloppe will create a branch (usually named after your vault)
2. It will push your note(s) to the correct folder in `content/garden/`
3. By default, it will auto-merge the PR (you can disable this in settings)

### Step 4: Check Your Site

After GitHub Actions builds your site:
- Visit your note at `https://mbbroberg.fun/garden/category/filename/`
- Verify the breadcrumb shows: Garden → [Tag Name] → Note Title
- Check that aliases redirect old URLs correctly

## Folder Mapping Examples

### Example 1: Philosophy Note

**Obsidian Path**: `Garden/Philosophy-Psychology/cognitive-frames.md`

**Frontmatter**:
```yaml
---
share: true
title: Cognitive Frames
slug: /philosophy-psychology/cognitive-frames
tags:
  - cognitive-frames
type: garden
state: sprout
---
```

**Published To**: `content/garden/philosophy-psychology/cognitive-frames.md`

**URL**: `https://mbbroberg.fun/garden/philosophy-psychology/cognitive-frames/`

**Breadcrumb**: Garden → Cognitive Frames → Cognitive Frames

### Example 2: Product Management Note

**Obsidian Path**: `Garden/Product-Management/platform-product.md`

**Frontmatter**:
```yaml
---
share: true
title: Platform Product Management
slug: /product-management/platform-product
tags:
  - platform-product
  - product-thinking
type: garden
state: rhizome
---
```

**Published To**: `content/garden/product-management/platform-product.md`

**URL**: `https://mbbroberg.fun/garden/product-management/platform-product/`

**Breadcrumb**: Garden → Platform Product → Platform Product Management

## Troubleshooting

### Issue: Files Published to Wrong Folder

**Solution**: Check your `slug` frontmatter field. It should match the folder structure:
- ✅ `slug: /philosophy-psychology/filename`
- ❌ `slug: /filename`

### Issue: Broken Links After Publishing

**Solution**: 
1. Use relative wikilinks in Obsidian: `[[filename]]` not `[[folder/filename]]`
2. Enable "Convert Wikilinks to Markdown" in Enveloppe settings
3. Enveloppe will handle the path conversion

### Issue: Images Not Showing

**Solution**:
1. Store images in `static/images/` in your Hugo site
2. Reference them in Obsidian as: `![alt text](../../static/images/image.png)`
3. Or use Enveloppe's attachment handling to auto-upload images

### Issue: Merge Conflicts

**Solution**:
- Don't publish too frequently (wait for previous PR to merge)
- Manually resolve conflicts on GitHub if they occur
- Consider disabling auto-merge in Enveloppe settings

## Advanced: Templater Integration

Use Templater to automate frontmatter creation:

```javascript
---
share: false
title: <% tp.file.title %>
slug: /<% tp.file.folder(true).toLowerCase().replace(/ /g, '-') %>/<% tp.file.title.toLowerCase().replace(/ /g, '-') %>
tags:
  - 
date: <% tp.date.now("YYYY-MM-DD") %>
type: garden
state: seed
---
```

This template:
- Auto-generates the slug based on folder and filename
- Sets default state to "seed"
- Adds current date
- Leaves `share: false` until you're ready to publish

## Tips for Success

1. **Start Small**: Publish one note at a time until you're comfortable with the workflow
2. **Use Tags Consistently**: Your first tag determines the breadcrumb, so choose wisely
3. **Check Aliases**: The aliases we added preserve old URLs, so don't worry about broken links
4. **Test Locally**: Run `hugo serve` locally before publishing to catch issues
5. **Batch Updates**: Use "Refresh all published notes" to update multiple notes at once

## Resources

- [Enveloppe Documentation](https://enveloppe.ovh/)
- [Hugo Documentation](https://gohugo.io/documentation/)
- [Your Site's CLAUDE.md](../CLAUDE.md) - Development commands and architecture

---

**Questions?** Open an issue on your GitHub repository or check the Enveloppe [GitHub Discussions](https://github.com/orgs/Enveloppe/discussions).

