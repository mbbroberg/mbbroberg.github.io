# mbbroberg.github.io

Personal website built with [Hugo](https://gohugo.io/) and [Anatole](https://github.com/lxndrblz/anatole) theme. 

## How it works 

These are mostly notes to my future self.

### Writing Flow 🌊

The site builds and deploys automatically through GitHub Actions. To add new content:

- Add posts to `content/articles/`
  - You can use [Hugo Page Bundles](https://gohugo.io/content-management/page-bundles/) to store images with posts
- or add pages to `content/` as a new folder and index.md file
  - Create a link to the new page in `config/menus.toml`
- Update about me in `content/_index.md`
  - Social links are in `config/params.toml`

### Other Notes 📦

- Theme updates: `git submodule update --remote --merge themes/anatole`
- GitHub Actions is under `.workflows/`
  - I used to build through Netlify but Actions is working well now

## How I write 📝

I use [Obsidian](https://obsidian.md/) for my notes and [Enveloppe](https://github.com/Enveloppe) plugin to publish to this site.