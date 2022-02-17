# mbbroberg.github.io

[![Netlify Status](https://api.netlify.com/api/v1/badges/61fb1a92-2df6-451f-96c6-509f29ca23b5/deploy-status)](https://app.netlify.com/sites/sleepy-meninsky-593e27/deploys)

## My simple Hugo flow 

The idea here being that I flow from IA Writer/WorkingCopy or my Mac. Push to main, auto-publish from that flow.

Scripts to write: 

- New draft is pretty trivial -- plop something in content/articles/
- Publish -- GH Action to build env, clear docs/ and rebuild to docs/

## Notes to self 📝

- Keep the theme updated wih `git submodule update --remote --merge`... but I forked it to make some customizations.
- Publish a new version by running 
- Using `bundle` logic in Hugo allows me to store imagaes with the post and address it as the same namespace.
- Currently publishing to `docs/` by running `rm -rf docs/ && hugo -d docs/ -gc`

### What's in the box? 📦

- Hugo, pretty vanilla to start
- A customized fork of the anatole theme
