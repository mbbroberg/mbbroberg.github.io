---
date: "2017-07-07T00:00:00Z"
tag:
- community
title: Community Maintenance Mode
---

  ***TL;DR**** the current maintainers of Sensu Plugins and I have decided to slow down on regular issue support so we can speed up on version 0.29 (and the impeding Sensu version 1.0!) compatibility and standardizing on communication platforms. You can help! Scroll to the bottom to see how.*

![](/img/1*f3l1bu97-xUO8tzCw62bbQ.jpeg)Time to retool some around the Sensu Community (image [thanks to Unsplash](https://unsplash.com/collections/995311/symbols-of-open-source?photo=vS7LVkPyXJU))I joined Sensu with faith that we have something incredibly special about our community and I was absolutely right.

In the few weeks [since I’ve joined](https://medium.com/@mbbroberg/building-community-at-sensu-cd9ebd7c602b), I’ve entirely focused on connecting with past and present plugin maintainers and learning as much as I can about the Sensu Plugins backstory. I spend afternoons scrolling through GitHub commit histories, taking notes on contributions small and large along the way (version control ftw ❤️). The one event everyone points back to as crucial is the migration from a single repository for all plugins ([Sensu Community Plugins](https://github.com/sensu/sensu-community-plugins)) to their own repos under a [Sensu Plugins organization](https://github.com/sensu-plugins). It was a huge project completed thanks to contributions by many.

While this event came up in many of the conversations I’ve had with contributors to the Sensu Plugins project from around the world, there was one even more consistent message: every one of our contributors had positive things to say about the Sensu Community as a whole. There’s something really special in the consistency of this feedback, and I love that my job is to cultivate what makes us special and brings us together.

A huge thanks to those who have taken the time to speak with me about their experience in the Sensu community. For those who haven’t yet or want to again, you can schedule some time on my calendar [using Calendly](https://calendly.com/mbb). And thank you to everyone, past and present, who has been involved in Sensu.

### Our Next Challenge

So much of what brought contributors together was the need to solve a challenge, and they saw that many hands made for light work. Contributor feedback has lead us to our next communal effort that we will rally around to improve everyone’s experience.

### Technical Need

We have two major projects currently underway:

* Testing all community plugins with the latest Sensu release, 0.29 (the 1.0 release candidate)
* Updating plugins depending on sensu-plugin library version to 2.x
### Community Need

We have some decisions to make that are sure to improve the greater community:

* Choose the preferred communication platform(s) for the community
* Document the maintainers for all Sensu components, and where contributions from others are most appreciated
In the background, we are also tackling a formal outline of maintainer practices (i.e. maintainer toolchain, release process for Ruby gems, contributor guidelines and more) so there can be greater continuity between maintainers efforts. As you might expect, this is not a small effort and we’re taking the time to do it well.

### What You Need to Know (And How to Help)

There’s a lot going on in the Sensu Community right now, so here are the major takeaways:

* **Communication channels are under review** — IRC, mailing lists and other community channels are under review as we decide where we want to live online. If you have an opinion, please [fill out this survey](https://goo.gl/forms/vBDFpNjlA4TQo5Fj1) so we can balance opinions with hard numbers.
* **Test thoroughly before upgrading to 0.29 in production** — If you depend on plugins maintained under the Sensu Plugins org on GitHub, it’s advised to follow best practice and pin your production environments to 0.28 or lower to avoid Ruby 2.4 compatibility challenges introduced in 0.29
* **Get involved! Here’s how:**
* Read the super issue on official 0.29 support and what maintainers recommend to do: [**Bump all plugins dependency on **](https://github.com/sensu-plugins/sensu-plugins-feature-requests/issues/26)[**s**](https://github.com/sensu-plugins/sensu-plugins-feature-requests/issues/26)**ensu-plugin**
* **Choose a plugin not yet checked off **[**this list**](https://github.com/sensu-plugins/sensu-plugins-feature-requests/issues/27) and comment that you’ll run it (and open up and issue if it fails to run)
* Take the next step by testing runtime behavior of the plugin ([read about runtime testing](https://github.com/sensu-plugins/sensu-plugins-feature-requests/issues/29)) and open issues as needed
No matter where it is or what size, I look forward to your contribution to the community — every bit of help counts!

** Special thanks to *[*Ben Abrams*](https://github.com/majormoses)* for his help outlining this post and his leadership in our community*

*This article was originally published [on Medium](https://medium.com/@mbbroberg)*