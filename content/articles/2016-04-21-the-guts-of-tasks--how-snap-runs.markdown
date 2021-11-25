---
date: "2016-04-21T00:00:00Z"
tag:
- monitoring
title: 'The Guts of Tasks: How Snap Runs'
slug: ../snap-tasks
---

  My [last post](https://medium.com/intel-sdi/my-how-to-for-the-snap-telemetry-framework-e3bb641bc740) dug into the how-to of running Snap. The steps are worth outlining as we continue to get familiar with the project:

![](/img/1*h6ybssckrbVHxI56tesSiA.png)Snappy The Telemetry Snapping Turtle* Download a Snap release (latest is [now v0.13.0](https://github.com/intelsdi-x/snap/releases))
* Start *snapd*, the Snap daemon
* Use *snapctl *to load plugins and create a task from the [examples folder](https://github.com/intelsdi-x/snap/tree/master/examples/tasks)
* Watch the running task
That’s the flow: download, run the daemon, load plugins and create a task. All operational tutorials of the project go through this flow.

Now that you’re familiar with it, let’s dive into the guts.

How do I customize the telemetry I gather? How do I decide where to publish it? At what time interval?

The answer to each of these is in a **Task Manifest**.

### Anatomy of a Task Manifest

A **Task **describes the how, what, and when for a Snap job and this information is expressed in a **Task Manifest**. Here’s a commented version, written in YAML, to learn by example:

An annotated version of a Snap Task Manifest which collects, processes and publishes.And I dig a little deeper in this example:

Here we dig a little deeper given the large number of measurements we can gather from psutil### How I Write Task Manifest

Here’s my flow for authoring a new **Task Manifest**:

1: Copy/paste a valid task, like the YAML gist above

2: Start *snapd *and load any collector plugins you would like to collect:

$ snapd -t 0# In another window:  
$ snapctl plugin load path/to/snap-plugin-collector-psutil# And so on for each plugin you load, then:  
$ snapctl metric list | cut -f 13: Copy/paste the metrics listed after *cut* and put them into the metrics section as show in our example above.

4: Meet the JSON-style formatting requirements for each metric listed, appending “: {}” to the end of each line as shown.

*Recommendation*: Use shortcuts from your favorite IDE to make the formatting painless. I use [Atom](https://atom.io/) these days and multi-select lines using the [Sublime-Style-Column-Selection](https://atom.io/packages/Sublime-Style-Column-Selection) plugin (which you can also do in Sublime Text 3, as the name suggests).

5: Save and load your new Task Manifest using *snapctl task create -t my-task.yaml*

*Note*: As of today, if you want to use the REST API directly through cURL or otherwise, you’ll need to convert the YAML to JSON. I use the *json2yaml *Python utility, which I installed using *pip.*

Here’s another example of writing a Task Manifest to bring this home:

Syntax of **task manifests** are explained [here in the GitHub repo](https://github.com/intelsdi-x/snap/blob/master/docs/TASKS.md).### But, Why?

#### Why have a separation between what you *could* collect and what you are *collecting*?

The videos give walkthroughs of how, so I’ll focus in on the ***why***.

An important design decision for Snap came in the division between available metrics and collected metrics. Since Tasks often include multiple collectors, there’s a lot of valuable details available, but it can be overwhelming to see them all at once. For instance, the [psutil](https://github.com/intelsdi-x/snap-plugin-collector-psutil) plugin gathers 41 values. Add in a powerful Intel-specific plugin like [PCM](https://github.com/intelsdi-x/snap-plugin-collector-pcm) (Intel Performance Counter Monitor) and you have another 29. We could gather all of these measurements, then include a few more from [ethtool](https://github.com/intelsdi-x/snap-plugin-collector-ethtool), [docker](https://github.com/intelsdi-x/snap-plugin-collector-docker) and [etcd](https://github.com/intelsdi-x/snap-plugin-collector-etcd), but we soon have hundreds of measurements.

Tasks define which metrics will be collected allowing us to be precise in choosing exactly what information we want streaming through *snapd*. This gets particularly important when you look at a plugin like ethtool, which can gather hundreds of network measurements per physical device. Focusing in on meaningful information reduces our noise AND our resource utilization.

### Tasks as a Powerful Abstraction

Tasks are powerful in how they decouple important details of measurement. Each Task can manage its own workflow of telemetry. Each Task can run on its own schedule. All metrics listed in tasks allow for the pinning of versions of plugins as needed. These decouplings allow for the flexible collection of data while keeping resource use light and administration operationally simple. It’s a tough dichotomy to balance — simplicity and effectiveness — but I think Snap is dead on target.

I’d enjoy seeing your first Task Manifest. Be sure to share your gists or GitHub repos in [our Gitter channel!](https://gitter.im/intelsdi-x/snap)

*This article was originally published [on Medium](https://medium.com/@mbbroberg)*