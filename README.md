# mbbroberg.github.io

A simple site extended from [this Jekyll theme](http://sergiokopplin.github.io/indigo/). If you'd like to extend your own, I recommend starting with the original theme.

## How to:

(From the original repo and references I will use)

- Article: How to Install Jekyll - by [Arti Annaswamy](https://github.com/aannasw). [Part 1](http://artiannaswamy.com/build-a-github-blog-part-1) and [Part 2](http://artiannaswamy.com/build-a-github-blog-part-2)
- [Emojis in the projects list?](https://github.com/sergiokopplin/indigo/issues/72)
- [Nokogiri dependencie problems?](https://github.com/sergiokopplin/indigo/issues/81)
- [Syncing a Fork](https://help.github.com/articles/syncing-a-fork/)
- [Tests with Travis CI - Tutorial](http://www.raywenderlich.com/109418/travis-ci-tutorial)
- [Why Sass?](https://github.com/sergiokopplin/indigo/issues/117)

##  Docker

### Build and run a container

- Run in the shell:

```bash
docker build --rm -t mbbroberg:blog . && docker run -it -d -p 80:80 --name blog mbbroberg:blog
```

- Open a web browser on [localhost](http://localhost)

### Stop the container

```bash
docker stop blog
```
