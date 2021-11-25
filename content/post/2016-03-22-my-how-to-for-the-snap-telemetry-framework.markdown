---
date: "2016-03-22T00:00:00Z"
tag:
- monitoring
title: My How-to for the Snap Telemetry Framework
---

#### Updated November 30th, 2016

Today was [the announcement](https://itpeernetwork.intel.com/announcing-snap-1-0/) that Snap reached a 1.0.0 release. On our journey toward this milestone, we did a rename of the binaries used in Snap (*snapd* is now *snapteld* and *snapctl* is *snaptel*) to avoid a conflict with another package. Since this post is the most popular of our series on Snap, so I updated it given this change. Enjoy!

I was fortunate enough to be part of the release of [Snap, an open telemetry framework](https://github.com/intelsdi-x/snap), a few months ago and the feedback has been phenomenal.


> [](https://twitter.com/cpswan/status/672090687345729536)Organizations big and small see opportunity in a **single API** to manage any and all layers of their data center metrics. One-on-one conversations have been productive — I love those moments when the idea of snap clicks in as we discuss telemetry and its value in mass. Eyes widen. Data pipelines are whiteboarded. Everyone leaves happier after we discuss it.

![](/img/1*RJF5nIkG1YCo7sRpwEnV1Q.png)The workflow snap is designed to capture. The left-hand side is raw potential that, by the time it reaches the right-hand side, is a filtered and domain-specific dashboards of valuable insights. That is the big picture goal — we flow from collection, we do some level of processing on that raw value and then we publish what is valuable to the right audience in the right way.I could, however, do better at sharing that story beyond the one-on-ones and to the rest of us out here. Let’s fix this with a no assumptions introduction. We can talk telemetry later: let’s get Snap running right away.

### Download and Run snaptel

When you want to start using Snap, you start with the Snap daemon, *snapteld*. Each version is hosted on GitHub under the repositories [releases tab](https://github.com/intelsdi-x/snap/releases) as shown in the video below. As of today, you can pull the latest build, *now 1.0.0*, and get up and running with just a download. Packages are also [available here](http://snap-telemetry.io/download). If you’re beginning with Snap, start simple and give this a watch:

Note as of Nov 30th — the binaries have changed from snapd and snapctl to snapteld and snaptel. Everything else in this video still works!The take home notes I like to highlight:

* You don’t need to write Go code to use Snap
* *snapteld* is designed with security concerns in mind, so plugin trust levels are always required (Disabled, Enabled, Warning) through the CLI or configuration files
* The plugins provide by the team are not cryptographically signed at this time, so we need to run at trust-level 0
* Run *snaptel *to communicate with *snapteld*, or use the [REST API](https://github.com/intelsdi-x/snap/blob/master/docs/REST_API.md) directly
### Load Some Plugins

Running *snapteld* is a prerequisite to doing anything interesting, but the daemon doesn’t do anything until we plug in some plugins and a workflow for them.

![](/img/1*hi1Z1RXtAUP0N8G-X1A6SQ.png)snapteld gives you the potential to achieve this: the workflow of snap is designed with Collection, Processing and Publishing in mind as modular and decoupled phases, each with its own plugin. After publishing, information could be pulled into any downstream service.A Task Manifest is the declarative expression of a workflow, written in JSON or YAML, that uses plugins to collect, process (optional) and publish metrics. I load 3 plugins and use the following Task Manifest for them in the next video. Here’s the YAML for it:

---  
 version: 1  
 schedule:   
 type: "simple"  
 interval: "1s"  
 workflow:   
 collect:   
 metrics:   
 /intel/mock/foo: {}  
 /intel/mock/bar: {}  
 /intel/mock/*/baz: {}  
 config:   
 /intel/mock:   
 user: "root"  
 password: "secret"  
 process:   
 -   
 plugin\_name: "passthru"  
 process: null  
 publish:   
 -   
 plugin\_name: "file"  
 config:   
 file: "/tmp/snap\_published\_mock\_file.log"And here’s the video:

Again: Note as of Nov 30th — the binaries have changed from snapd and snapctl to snapteld and snaptel. Everything else in this video still works!The takeaway points are:

* Plugins are binaries loaded into *snapteld* instances based on their path
* Upon loading plugins, metrics become available to collect
* Plugins collect, process and publish as defined by a *workflow* expressed in* *a* Task Manifest*
### Watching Telemetry Fly In

If you followed along, you’ve run the Snap daemon, understood its required flags, loaded plugins and created a task that leverages them. That’s pretty cool for a few reasons:

* I can continually read and write telemetry and know it’s managed by *snapteld*
* I can add further tasks to read and write telemetry without disrupting my current tasks
All these concepts are nice to grasp, but they make more sense when you use them yourself. Keep familiarizing yourself with [further example tasks](https://github.com/intelsdi-x/snap/tree/master/examples/tasks), then run *task watch *to monitor live telemetry. Keep exploring the [current plugins in the catalog](https://github.com/intelsdi-x/snap/blob/master/docs/PLUGIN_CATALOG.md) or [start writing your own](https://github.com/intelsdi-x/snap/blob/master/docs/PLUGIN_AUTHORING.md). If you decide to do either, chat with me about it [on Twitter](http://twitter.com/mjbrender) and the rest of the team [on Slack](http://slack.snap-telemetry.io/).

*This article was originally published [on Medium](https://medium.com/@mbbroberg)*