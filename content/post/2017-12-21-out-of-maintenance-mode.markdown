---
date: "2017-12-21T00:00:00Z"
tag:
- community
title: Out of Maintenance Mode
---

  A few months ago I announced an idea I’m now quite proud of: our [community needed some time in Maintenance Mode](https://blog.sensuapp.org/community-maintenance-mode-d109e75bcbc4). How did we know we needed it? To review our challenges that lead us here, we had:

* Fragmented conversations across social platforms
* Difficulty knowing who was maintaining which community project
* Unknown expectations for contribution
Thinking from a user-centric perspective, we needed our community to be:

* Easy to talk to
* Easy to contribute to
* Fun to hangout with
That meant taking on an increasingly large amount of change while new people joined the team and while keeping the lights on. It was ambitious, above and beyond the call of being a maintainer, and still our community wanted it.

So we said we are in “maintenance mode” and we had to slow down on code reviews and new features until we got through it. The idea of taking a break in order to move forward came from a maintainer who had the foresight to see how slowing down for a moment will let us speed up in the long run. And they were right: it’s months later and we now have 4 active communication platforms, a dozen empowered maintainers and a set of practices that we can be proud of.

![](/img/1*1AzXIxJ452B53mplczWxiw.png)h/t to Scott Simmerman, [“The Square Wheels Guy”](https://www.performancemanagementcompany.com/squarewheels)### Beginning with the User

Community building without consulting a community is a recipe for disaster. I spent a month doing regular interviews, asking each person these same questions (that I list here in case you want to do the same for your community):

* How are you involved in the community right now?
* Are you looking to contribute more actively (or less)?
* If more, what’s holding you back from doing so?
* Where do you participate in the community (both online and offline)?
* What’s your experience communicating with other Sensu users?
* What’s the best part of the community?
* What’s the worst part?
* What’s one thing we can fix today to make it better?
These conversations were incredibly revealing, but the data set was small. I then used these interviews to design short questionnaires to flesh out the data set and sent them out through Twitter, IRC and email.

The only thing as consistent as people’s love for Sensu was their struggle to “get involved” in the community. The challenge makes sense in the project’s history: the Sensu Community has been a self-organizing entity for 6 years now. That’s a long time in the dog years of IT, so it makes sense that clusters of people have organized on their preferred places to communicate (which differ from other clusters on their preferred places).

I am a huge fan of self-organizing systems when they work, but — more often than we like to admit in community jobs— explicit leadership makes everyone happier.

The impact of self-organization was most apparent when we took an audit of channels. Some use Gitter while others were on IRC. Some participated in the mailing list, while others preached everything in GitHub. GitHub had activity, but it’s not a place where people were “hanging out.” The conclusion was clear: We needed to focus on curating a single place to be our home.

### Landing on our Platforms

Communities need places to gather. A healthy community needs space, and I’m a firm believe that these come in four forms:

1. synchronous communication
2. asynchronous communication
3. face-to-face (f2f)
4. news
Sync gives room for the casual conversation, async is for definitive answers, f2f builds that formidable bond between members of a community, and news keeps people informed and empowered. [I’ve spoken about these before](https://medium.com/influence-marketing-council/building-a-healthy-community-with-matt-broberg-ep014-59364ea9e741) and will elaborate on this theory in another post, but for now you’ll have to trust that each has a distinct need and each is required to get out of Maintenance Mode.

The sausage making of these decisions include everything you’d imagine: sharing, disagreeing, trying, failing, retrying. For the sake of brevity, I want to share just two stories on our decision making.

#### Choosing Slack

The largest communication gap we had came in the form of synchronous. That may have been a surprise at the time, given Sensu had an IRC channel that consistently had 150 users in it and an average of 10 messages daily. I mean, that *looks* solid for a day-to-day number. But the raw numbers don’t tell a meaningful story.

What I found through IRC logs is that less than 10 users interacted on any day and about 10x that number of users would login, ask something, and logout before getting an answer to their question. Each one might get an answer a little while later, but IRC won’t notify them after logging off (without additional tooling). That left both the regular users and the question askers frustrated.

![](/img/1*rX1_zebZKvl4zvRHCDn1cA.png)Slack, on the other hand, requires account creation to participate. This simple requirement effectively addresses the disappearing user pattern. Between that benefit and the configuration of multiple feature-specific channels, the platform change has helped us steadily grow to over 500 in about 4 months of advertising it (**3.5x growth**). On a weekly basis we see over 100 active users posting over 50 messages (not including bots, **500% growth**). And we’re just getting started — I know we have more room to grow before it reflects our active user base.

![](/img/1*qBftDkrw-mc6tDsp0LKEcQ.png)Weekly active users over the holidays of 2017. The participation has been incredible.#### Remote face-to-face is a perfect oxymoron

One more story: our decision to start a remote face-to-face platform started from our inaugural in-person event. We ran [the first Sensu Summit](https://sensuapp.org/summit) with 75 attendees this year. What was immediately apparent was how we all enjoyed being around each other. No matter how interconnected we are over text-based mediums, nothing replaces the sense of belonging we get from seeing, and being seen by, others.

![](/img/1*S3Afzz624SmmD15Oahkgqw.jpeg)One of the working group discussions from the Sensu Summit Community day
> No matter how interconnected we are over text-based mediums, nothing replaces the sense of belonging we get from seeing, and being seen by, others.To keep that momentum going, now-maintainer Chris Chandler suggested we hold a video chat, which begun what I call the **Sensu Community Chats**. These have resulted in dozens of attendees and (most surprisingly to be honest) hundreds of [views on YouTube](https://www.youtube.com/channel/UCr9oDBHCZumrn1B9ljF5E2w) by the community.

![](/img/1*OA1kr3lchanXGxbW7gEUxA.png)A few of us getting f2f time on the Sensu Community Chat### Making Contribution Easy

Contribution begins with clear leadership. The rich history of Sensu is paved by hundreds of contributors whose involvement has ranged from one-time commits to sustained contribution spanning multiple years. While the informal nature of these roles has worked in many occasions, user interviews told me that it wasn’t providing the clarity we needed to continue to scale. We needed a shift in philosophy that is intentional, thoughtful and transparent.

The solution began by letting people know about the opportunity. After doing so through established channels like [our GitHub repository](https://github.com/sensu-plugins/community/issues), it opened up the floodgates of community involvement. We now have empowered lead maintainers for each of the major parts of the Sensu ecosystem while many more regularly participate.

![](/img/1*jI_6WuzaL2kyQldMcIUb3Q.png)A growing number of areas are covered by semi-autonomous leads empowered to make decisions. This is tracked as part of the [Community Repository](https://github.com/sensu-plugins/community).Our ability to scale up contribution beyond maintainers is due to a massive effort to refine little, seemingly-invisible parts of the process. It means standardizing and configuring GitHub labels in the first place, then taking the time to curate issues that actively need help or are great for first-time contributors, which we have labeled as Help Wanted. It’s consistently and constantly pointing people to the same location until that place becomes habit. It’s spending time planning and curating intentional Slack channels so it’s an effective platform. It’s distributing decision making efficiently enough that no one person is a bottleneck for the breadth of our ecosystem and global network of contributors.

It’s hard to make things easier. It’s hard and you’re never quite done doing it, but the results show.

One example of how we’ve began to crack the code on how to do this in the Sensu world is with the Community repository mentioned above. This strategy of having a “meta” or “mono” repository where bigger-than-one-repo work is tracked is a useful strategy in larger projects and one I’ve used before. What made it work, however, was that we did it the **right way for our community**. It began by updating an existing “feature request” repository, gradually improving it, then revising its scope to reflect the improvements. Said another way: we started by doing the work. Now it’s a place people can rely on.

![](/img/1*eGS_rR96IKJFo4NWqYwuhg.png)This is also a good time to state why we didn’t choose some platforms that seem like a good idea. I explicitly asked community members whether they’d like us to be active on Stackoverflow. This was met with complete and total rejection, which surprised me since almost [500 questions mentioning Sensu](https://stackoverflow.com/search?q=sensu) are on there.

Whether I like the platform or not, it’s not something the community leadership wanted to jump onto today. Maybe someday, but not today. It reminds me how all improvements have to be anchored in the community’s history to take effect, not in an ideal state I might be trying to point us toward.

### Where we are and what’s next

Based on existing work and stories like those above, we made an informed decision to land on:

* [Slack](http://slack.sensu.io) for synchronous discussions
* [Google Groups](https://groups.google.com/forum/#!forum/sensu-users) for asynchronous
* Regular video meetings ([Sensu Community Chats](http://bit.ly/sensucommunitymeeting)) for F2F
* [The Sensu Blog](https://blog.sensuapp.org), [Sensu Newsletter](http://bit.ly/sensunewsletter) and [Twitter account](http://twitter.com/sensu) for news
![](/img/1*4mc55oUFPCHytEhtYsAgag.png)Highlights of our community locations on [the Community page](https://sensuapp.org/community)With these locations, we’ve effectively addressed the first challenge — landing on *something *that everyone can count on it. These platforms are not final, but these four pillars of communication in the Sensu Community are here to stay. This specific set of them is our first major release in [Semantic Versioning](https://semver.org/) terms. We are providing a stable set of communication channels that will exist until we decide to deprecate them for something new. The important part is the structure, not the specifics.


> These platforms are not permanent, but these four pillars of communication in the Sensu Community are here to stay.We’ve progressed to the point where we have a dozen regular maintainers, dozens more contributors, hundreds of Slack participants, thousands of GitHub followers and a tens of thousands of users (10k downloads a week by [Sean](https://twitter.com/portertech)’s count).


> [](https://twitter.com/portertech/status/929069228270927872)Those top-level metrics are exciting, but ***our progress is measured in reducing the friction of contribution***.

We have reliable platforms where people gather for all types of communication. We have practices of being a maintainer for everything from onboarding to default replies to labeling conventions. We have all the public conversation complemented by the right set of private space on Slack & GitHub to continue to refine our processes. Our friction is dropping exponentially, and that’s what will lead us to a growing, healthy community.

I have to say that having someone in your community wise enough to suggest maintenance mode in the first place and the leadership to help it happen is such a blessing. I was right when I said in my first post that this community is special.

We know we’re not done, but I am proud to say where we are. That’s why I can proudly say **we’re out of Maintenance Mode**.

If you’re a fellow community builder, I urge you to start by:

* Respecting the community’s story by reaching out to contributors throughout the history of the project. Their institutional knowledge will inform how you communicate a broader vision.
* Evaluate your volunteer leadership model. It might be counterintuitive, but self-organizing groups benefit from strong, consistent direction. Finding a balance between user-driven and company-guided is key.
* Speak with your community members, old and new. I setup a [Calendly account](https://calendly.com/) and gave myself a target of at least 10 in that first month. These talks have informed every decision I’ve made since.
* Evaluate whether you have the necessary platforms in place (sync, async, f2f, news).
I’d love to hear your community story. Reach out [Twitter @mbbroberg](http://twitter.com/mbbroberg) or in the [Evangelist Collective Slack](https://evangelistcollective.github.io/).

*This article was originally published [on Medium](https://medium.com/@mbbroberg)*