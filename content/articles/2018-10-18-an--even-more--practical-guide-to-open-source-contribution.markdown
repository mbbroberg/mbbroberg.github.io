---
date: "2018-10-18T00:00:00Z"
tag:
- opensource
title: An (even more) practical guide to open source contribution
slug: ../practical-open-source
---

  I had the pleasure of [speaking at DevOps Minneapolis](https://www.meetup.com/DevOps-Minneapolis/) to a great group of people. In it we explored why I’m fascinated by open source, how it’s growing as a career opportunity, and then dove deep into the terminology that can be confusing at times. I called the talk a “practical guide” because it includes all the lesser-discussed parts of the effort: understanding terminology, feeling okay practicing, offering PRs for small improvements like correcting a typo. It was a great time and many came up to discuss it afterward.

![](/img/1*vwpaDtzwwiVhxEyXgmylXA.png)It was so fun talking with my DevOps people in Minneapolis!What happened next was a 40 minute whiteboard session on what commands to run when you’re trying to push to GitHub. It was exciting, engaging, and the moment I realized that there were some even more practical tips the audience needed to hear. Here is that guide.

### Configuring your laptop for SSH access

While I highly recommend new GitHub users enjoy their [beautiful desktop applications](https://desktop.github.com/), most people I talk to enjoy the CLI too much to do so. If you’re going to hang out on the CLI, [invest in setting up SSH keys](https://help.github.com/articles/connecting-to-github-with-ssh/) so you don’t have to re-enter your password.

[**Connecting to GitHub with SSH - User Documentation**  
*You can connect to GitHub using SSH. ...*help.github.com](https://help.github.com/articles/connecting-to-github-with-ssh/ "https://help.github.com/articles/connecting-to-github-with-ssh/")[](https://help.github.com/articles/connecting-to-github-with-ssh/)### Commit to understanding commits

These wonderful little dots will be the difference between a helpful PR and one that’s confusing to other users. I’m a visual thinker, so it’s been difficult at times to know what’s going on. Then I found the beautiful [Learn Git Branching](https://learngitbranching.js.org/) tutorial. It took me about 5 run throughs to make me feel like a native speaker of commit history. Spend 15 minutes every morning for a month and I guarantee you’ll get there too. It’s worth the time!

[**Learn Git Branching**  
*An interactive Git visualization tool to educate and challenge!*learngitbranching.js.org](https://learngitbranching.js.org/ "https://learngitbranching.js.org/")[](https://learngitbranching.js.org/)### Issues are a kindness

Reporting a detailed, thoughtful, and well-documented issue for a popular project is a great way to give back without a single line of code. I can tell you that I was nervous doing so for a while, but the trick to feeling confident is this:

* Review the CONTRIBUTING.md file to ensure they want issues opened.
* Search through all open ***and closed*** to ensure it’s not already solved.
* Make sure you’re running the most recent version of the project.
* Provide context: what OS, how did you run it, what errors can you see, etc.
* Be responsive — respond to follow up requests on the issue.
* Be humble — your kindness is done when the issue is closed, even if its closed without you feeling like its completed.
Here are a few examples of when I’ve followed these practices and had a good time doing so:

[**Homebrew failing to install git · Issue #12325 · Homebrew/legacy-homebrew**  
*Hey folks - total new guy here so apologies if I'm missing some prerequisites. I'm trying to use cinderella …*github.com](https://github.com/Homebrew/legacy-homebrew/issues/12325 "https://github.com/Homebrew/legacy-homebrew/issues/12325")[](https://github.com/Homebrew/legacy-homebrew/issues/12325)^ Here’s where I fumbled on following the issue request, but the team was kind enough to help me through it. Kind maintainers go a long way.

[**Could not make until I ran godep get · Issue #5 · djosephsen/lazlo**  
*After go getting, make would break. I unfortunately deleted my terminal session and can't paste the output for you. 😞…*github.com](https://github.com/djosephsen/lazlo/issues/5 "https://github.com/djosephsen/lazlo/issues/5")[](https://github.com/djosephsen/lazlo/issues/5)^ Here’s an example of me opening one without updating. Lesson learned!

[**tour: better introduction to type declaration than it "does what you'd expect." · Issue #14152 ·…**  
*Context: https://tour.golang.org/moretypes/2 This was good for a while, but we can do better. We could borrow from the…*github.com](https://github.com/golang/go/issues/14152 "https://github.com/golang/go/issues/14152")[](https://github.com/golang/go/issues/14152)^ The above is an example where I missed the original thread. They closed my issue and I joined the discussion on the other.

### Correcting typos or READMEs as your first PR

Pull requests don’t have to be complicated. I find myself regularly using other people’s projects, and I’m bound to find a typo or two along the way. A short PR is an easy merge for the maintainers and often appreciated. Here are some examples you can see as examples:

[**Corrected minor typo in pollTemplate by mbbroberg · Pull Request #40 · docker/leeroy**  
*I'm walking through this part of leeroy to figure out how to reuse it and saw this minor typo. Go go gadget minor…*github.com](https://github.com/docker/leeroy/pull/40 "https://github.com/docker/leeroy/pull/40")[](https://github.com/docker/leeroy/pull/40)[**Added tips and list of available functions to README by mbbroberg · Pull Request #5 ·…**  
*I found these helpful while using revelator. Thanks!*github.com](https://github.com/mpdehaan/revelator/pull/5 "https://github.com/mpdehaan/revelator/pull/5")[](https://github.com/mpdehaan/revelator/pull/5)[**Updating MySQL usage in README by mbbroberg · Pull Request #57 · MetricsGrimoire/MailingListStats**  
*Walked through installation of MySQL, creation of the first database and formatted appropriately. I filled in a lot of…*github.com](https://github.com/MetricsGrimoire/MailingListStats/pull/57 "https://github.com/MetricsGrimoire/MailingListStats/pull/57")[](https://github.com/MetricsGrimoire/MailingListStats/pull/57)### For those that took apart microwaves as children

There are those who don’t trust what they don’t understand. I often call them Engineers, and they’re awesome people. If you’re the type that needs to really get git before you’ll use it further, take the time to read [Git SCM](https://git-scm.com/about). It thoughtfully demystifies every piece of magic in the system.

![](/img/0*3Gcll_vE2NUn6iD7.png)A beautiful image showing how Git sees snapshots, not differences. Read the [full article here](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics).### Where to next?

If you have a CLI or GUI experience you feel good about, you’ve opened up an issue without fear, and started to share PRs once you’ve internalized commits, then you’re ready to dive in deeper.

* Learn GitHub using their [BRAND NEW tutorials](https://lab.github.com/courses) built into the site!
* Learn more about contributing from [these articles from GitHub](https://guides.github.com/).
* Have more fun setting up your laptop by [customizing your dotfiles](http://dotfiles.github.io/).
* If it’s a goal of yours, dive deeper into a programming language for free and with a mentor at [Exercism.io](https://exercism.io)
There’s a great deal more advice thanks to all the thoughtful commenters on this thread. Check it out and reach out if I can ever help you on your journey.


> [](https://twitter.com/mbbroberg/status/1049697913096495104)
*This article was originally published [on Medium](https://medium.com/@mbbroberg)*