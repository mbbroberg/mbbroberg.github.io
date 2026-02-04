---
created: 2025-02-22 Sat 2:41pm
updated: 2025-04-22 Tue 8:43pm
title: Make Obsidian a Digital Garden
slug: ../make-obsidian-a-digital-garden
filename: 2025-02-22-make-obsidian-a-digital-garden
date: 2025-02-22
share: true
---
![richard-giblett-mycelium-rhizome.png](/images/richard-giblett-mycelium-rhizome.png)

## Growing Ideas Like Mycelia

In 2010 I was told "if you ever have to explain something more than once, write a blog post." It's served me well. Many years later, writing has become second nature. I write everyday, sometimes in public, but mostly for myself these days. When I wondered why I seemed to stop, I realize it was the concept of posting has a permanence I don't have time to refine these days. The concept of a blog is one you "publish" on an artificial chronology feels increasingly disconnected from how knowledge and ideas actually develop.

I recently discovered a concept that changed my approach and fits my pattern that works far more for me these days: the digital garden.

## Why Garden Instead of Blog?

Knowledge doesn't grow linearly – it expands as an interconnected network of thoughts. Some ideas sprout quickly, others need time to mature, and the most interesting ones often emerge from unexpected connections. That's exactly what a digital garden enables.

Several thoughtful approaches have shaped my thinking, whether they identify as gardens or not:

- [Linking Your Thinking](https://notes.linkingyourthinking.com/Atlas/Notebox) by Nick Milo's demonstrates the power of interconnectedness of knowledge structures
- [Soren's Second 🧠](https://www.ssp.sh/brain/) has a thoughtful use of Maps of Content 
- [Jacky's blog](https://jzhao.xyz) and [werd.io](https://about.werd.io/) opened my eyes to other patterns frequent, low-friction publishing

What resonates most is that digital gardens emphasize growth over perfection. They encourage starting small, connecting ideas organically, and watching knowledge bloom.

## My Technical Setup: Obsidian + Hugo

While there are tons of complete framework out there, the key is choosing an approach that matches your thinking style. I use Obsidian extensively, but most of my files remain private. That rules out the standard Publish model since on day one of using it I published personal notes by accident. I've been drawn to rebuilding everything with yet-another-frame, but couldn't find a workflow that made sense. Then I realized what could be done with a plugin and rethinking through the problem.

I finally [went all in and build one](https://github.com/mbbroberg/mbbroberg.github.io/blob/main/layouts/garden/list.html) that's pretty beautiful. A minor [taxonomy edit](https://github.com/mbbroberg/mbbroberg.github.io/blob/main/config/_default/config.toml#L45-L48) with a little [metadata on the post](https://github.com/mbbroberg/mbbroberg.github.io/blob/main/content/garden/2020-04-10-learning-demands-change.md?plain=1#L17-L18) and it all comes together. If you want to build on my setup, here are the essential components:

- Run this [templater script](https://gist.github.com/mbbroberg/2c90d7c5c96e3a68be2f1ccbdb26447b) to designate content as Garden or Blog
- Use a hotkey to [launch Enveloppe](https://enveloppe.ovh) to publish individual notes or batch upload
- Let my [GitHub Action](https://github.com/mbbroberg/mbbroberg.github.io/blob/main/.github/workflows/hugo.yml) handle the build and deploy from `gh-pages`

For those starting fresh, [I recommend experimenting with Quartz](https://quartz.jzhao.xyz) first – it might do everything you need. If you're building on Hugo, you're welcome to [reuse my setup](https://github.com/mbbroberg/mbbroberg.github.io). I'd love to hear about it if you do. 

Happy gardening 🌱