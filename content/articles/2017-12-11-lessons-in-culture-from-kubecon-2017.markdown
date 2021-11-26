---
date: "2017-12-11T00:00:00Z"
tag:
- community
title: Lessons in Culture from KubeCon 2017
slug: ../kubernetes-culture-kubecon-2017
---

  *The themes that left me thinking how this community will change our industry.*

I spent last week at KubeCon / CloudNativeCon to keep learning alongside my peers and to absorb some of the positive energy swirling around the community we have. While the technology is exciting, I find myself reflecting on three themes that captured the event for me.

![](/img/1*kut6GRlEJOwdIAOcKs4k-g.jpeg)The feature-, and vendor,-rich Cloud Native Landscape, open sourced by the CNCF [here](https://github.com/cncf/landscape)### Kubernetes is boring

A point of celebration for many speakers was the assertion that Kubernetes is past the buzz stage. Boring as a goal has been part of the culture for some time (I always hear it referenced in a hat tip to Etsy engineering), but I can’t recall the last time I heard it at an up-and-coming conference. At KubeCon, [Clayton Coleman](https://twitter.com/smarterclayton?lang=en) brought the excitement for boring front and center in his keynote that emphasized how good it is to get there.

![](/img/1*XIbayYFHXBNHAIz0aXRGHA.png)Picture thanks to [Bridget Kromhout](https://twitter.com/bridgetkromhout) ([original tweet](https://twitter.com/bridgetkromhout/status/938799726794768386))I noticed boring as a milestone of success came in a few different forms:

1. **The boring certainty of Kubernetes **— after years of countless thought pieces pitting Kubernetes against other orchestrators, the decision is in. This community made it possible and cloud vendor adoption made it a certainty. Everyone else, even former competitive-leaning companies like [Mesosphere](https://mesosphere.com/blog/kubernetes-dcos/), are on board.
2. **The boring changelog** — fewer than ever features are going into Kubernetes. What makes up the nucleus of Kubernetes (as [Brian Grant](https://twitter.com/bgrant0607) calls it) is getting more refined. The way forward involves building on top of the project, not by baking features in, which will lead to stability.
3. **Boring, passionate contribution** — new contributors are showing up to the project in droves. I attribute that to the amazing effort of the project leadership to build a framework for contribution that allows for decentralized authority* *and a culture that rewards it* (more on that later)*.
There’s been a near-audible buzz around Kubernetes for a few years now. It’s grown louder and louder one announcement after another. Last week it got quiet.

Kubernetes has won, and that’s the best kind of boring you can get.

### Kubernetes isn’t the goal

In a way that only he can do, [Kelsey Hightower](https://medium.com/u/9e783a6f12f6) reminds us all that running Kubernetes adds no value to a company. Value will only be a reality for those that use Kubernetes to build better applications. His jaw-dropping keynote was filled with live demos that delve into application release patterns using the principles of continuous development and continuous delivery (CI/CD).

No part of the talk emphasized a shiny new Kubernetes feature, because Kubernetes is “the easy part” (even if you [learn it the hard way](https://github.com/kelseyhightower/kubernetes-the-hard-way)). Now we collectively need to step into application deployment in a very real way.

![](/img/1*DWJNAkSVYjRcFjwFwMjnHQ.png)He says “Ok Google, Kubernetes cluster.” And its’ there. Pic thanks to [this tweet](https://twitter.com/cyberblack28/status/938789829315309568).I can’t help but notice that Kelsey’s harbinger-of-the-future pattern emerging again. I started following him when he preached infrastructure as code. Once it landed as part of our collective Ops consciousness, he pushed us next toward containerization. After that became a reality, he knew we would need orchestration. We’ve hit this new milestone. I’m not sure what vendor will influence the growing market of products, but I am confident Kelsey is pointing us in the right direction. His healthy reminder — that infrastructure alone is not the goal — hit home for me.

We have the next breadcrumb in the form of CI/CD and the reassurance that Kubernetes gives us a reliable framework to get there.

### Chop wood and carry water

The strongest thread throughout the show came in the form of recognition for those who make Kubernetes what it is. The celebration is reserved, however, for those who do the work.

“Reward the actions you want to see,” said Sarah Novotny as she gave out community awards and again during her Friday keynote. In that way, she has instilled the most essential kernel into the culture of the Kubernetes community. This belief, in the form of a old-timey mantra, is now baked into the Kubernetes community: *chop wood and carry water.*


> [](https://twitter.com/bridgetkromhout/status/939150601849638913)I cannot say loudly enough or often enough how what Sarah has done is truly brilliant.

She cemented a culture of builders with a “help first” philosophy. It’s taken root, and you can see its positive results everywhere you look. It’s in the form of a more collaborative environment, less “bro”-y culture and supportive community leaders.

This community footing is a serious benefit in the long run. I believe a culture focused on helping before you roll your own will encourage multiple maintainers to collaborate on bigger — more successful — extensions to the framework. It also discourages project forking that ends up largely under-supported. A culture of helping others first just might (I say *will)* be the preventative care from that future pain.

I can already hear maintainers of subprojects reminding people to chop wood and carry water. It’s core to the tribe thanks to incredible leadership efforts that are invisible to you and me.


> [](https://twitter.com/as_w/status/939153632766906368)The message is loud and clear: expect to give back before you take if you want to make an impact in Kubernetes.

### The future is here

I don’t pretend to know whether your company is ready to hop on “the Kubernetes in production” wagon or not. What I do feel confident about is this: Kubernetes is here, and it will be part of your future.


> [](https://twitter.com/arungupta/status/939154405315801088)We all have an invitation to get involved and help shape that future. These speakers represent a culture that is a little different than those of the past. I think the sooner all of us internalize them, the sooner we can be part of the bigger vision that unfolds from it. I wrote this summary with the “chop wood and carry water” message in my mind and I encourage you to internalize it as well.

We know Kubernetes is going to be an essential piece of our industry’s future. Let’s start working toward that future and being better contributors to it.

*This article was originally published [on Medium](https://medium.com/@mbbroberg)*