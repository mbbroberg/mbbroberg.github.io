---
date: "2018-09-01T00:00:00Z"
description: All the tools I know to make Markdown your default means to writing.
tag:
- productivity
title: How to Use Markdown Everywhere
slug: ../markdown-everywhere
---

I haven't always loved plain text syntax. Once I embraced git as the _langua franca_ of IT Operations, I knew that made Markdown required knowledge. Fast forward a few years and many thousands of lines later and I'm in love.

For instance, the fact that `**bold**` renders as **bold** no matter where I type it and no amount of copy-and-pasting will make the format change is just too tempting to pass up. With that in mind, here's my collection of handy applications and conversion tools I keep around. The meaty part comes from **converting** from non-Markdown to Markdown, so dive right into that if you're interested.

## Writing in Markdown

{:refdef: style="text-align: center;"}
![Todoist is Markdown Magic]({{ site.baseimg }}/assets/posts/markdown-render-todoist.gif)
{: refdef}


* **Notes** - if you are starting from scratch, decide between [Bear App](http://www.bear-writer.com/) or the do-it-yourself [Joplin](https://joplin.cozic.net/). The latter is open source and robust and the former is simple, sleek, and inexpensive.
* **Todo List** - [Todoist](https://todoist.com/) is Markdown compatible by default (and supports emojis 💥), which is why I continue to use it for all my task management.
* **Writing** - if you can, ditch your CMS and Word docs for a git repository. Honestly, it's simple, gives you all the benefits of version control, and keeps you focused on the text more than the styling.

## Converting Non-Markdown to Markdown

* **Rich text** - wrote something in that undesirable rich text format? It's cool, [MarkdownIt](http://markitdown.medusis.com/) gives you the quickest way to convert. It's a little clumsy with links, but gets you 90% closer than you would writing and rewriting `[link](http://link)`.
* **Medium** - exporting from Medium to Markdown with a nifty Chrome extension like [this one](https://chrome.google.com/webstore/detail/convert-medium-posts-to-m/aelnflnmpbjgipamcogpdoppjbebnjea). It looks like you can write Medium posts in Markdown as well using [code like this](https://github.com/IonicaBizau/medium-editor-Markdown), even [from the command line](https://github.com/timakin/md2mid), though it's easy enough to [import from anywhere](https://medium.com/p/import).
* **Google Docs** - I've heavily relied on the open source [gdocs2md](https://github.com/evbacher/gd2md-html) app to convert Google Docs to Markdown files (hat tip to [this Stackoverflow answer](https://stackoverflow.com/questions/19769460/convert-google-docs-to-jekyll-Markdown) for pointing me here).
* **Evernote** - while this project is getting up their in age, I can confirm that [enml2md](https://github.com/zerobase/enml2md) allows you to extract an Evernote export (.enex) into separate Markdown files.

{:refdef: style="text-align: center;"}
![Medium exports is dope]({{ site.baseimg }}/assets/posts/markdown-export-medium.gif)
{: refdef}

## References when you get stuck

Markdown takes time to internalize, and there's no shame in looking it up (I _still_ look up how to link to an image on a regular basis). My frequently visited sites:

* http://daringfireball.net/projects/Markdown/basics
* https://guides.github.com/features/mastering-Markdown/
* https://www.Markdownguide.org/
* http://Markdowntutorial.com/

What are you using Markdown to do? Share tools or recommendations [with me](https://twitter.com/mbbroberg)!
