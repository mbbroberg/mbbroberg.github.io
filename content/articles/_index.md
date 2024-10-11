---
slug: articles/
layout: list
aliases: ["posts", "articles", "blog"]
author: "Matt Broberg"
---

Here are all my articles:

{{ range .Pages }}
  <article>
    <h2><a href="{{ .Permalink }}">{{ .Title }}</a></h2>
    <time>{{ .Date.Format "January 2, 2006" }}</time>
    <p>{{ .Summary }}</p>
  </article>
{{ end }}
