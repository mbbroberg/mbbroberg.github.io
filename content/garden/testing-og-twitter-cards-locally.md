---
title: Testing OG and Twitter Cards Locally
date: 2024-11-24
state: seed
tags:
  - productivity
---

When building a site with Open Graph and Twitter Card meta tags, you can verify they're rendering correctly before publishing using `curl` and `grep`.

## The Command

```bash
curl -s http://localhost:1313/your-page/ | grep -E "(og:image|twitter:image)"
```

## Example Output

For a page with an image in the content:

```bash
<meta name="twitter:image" content="http://localhost:1313/images/some-image.png" />
<meta property="og:image" content="http://localhost:1313/images/some-image.png" />
```

For a page falling back to the site default:

```bash
<meta name="twitter:image" content="http://localhost:1313/images/mbbrobergfun.png" />
<meta property="og:image" content="http://localhost:1313/images/mbbrobergfun.png" />
```

## Checking Other Meta Tags

Expand the grep pattern to see more:

```bash
# All Open Graph tags
curl -s http://localhost:1313/ | grep "og:"

# All Twitter tags
curl -s http://localhost:1313/ | grep "twitter:"

# Title and description
curl -s http://localhost:1313/ | grep -E "(og:title|og:description|twitter:title|twitter:description)"
```

## Testing with Preview Tools

For full visual previews, you need a public URL. Use a tunnel:

```bash
hugo serve &
ngrok http 1313
```

Then paste the ngrok URL into:

- [OpenGraph.xyz](https://www.opengraph.xyz/)
- [Social Share Preview](https://socialsharepreview.com/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
