---
date: "2016-11-17T00:00:00Z"
tag:
- monitoring
title: The Open Source Monitoring Stack at Staples
---

  Snap has led to a collaboration with the Site Reliability Engineering (SRE) team at Staples. This group has built what many are chasing: a platform that is ready to support production by monitoring their heterogeneous environment with open source projects.

I spent time digging into the architecture with **Subhash Gada**, technical lead and designer of their stack, and with **Yasmin Rajabi** ([yasmin](https://medium.com/u/cfa54a97a9de)), SRE Manager at Staples Inc., to get more insight into their environment.

#### Q: What’s in your monitoring stack?

***Staples:*** We went through several evaluations before deciding on our final stack.

![](/img/1*HkU1yUAy87D05Q2Dmw0NcA.png)On the left we have all the plugins we need to ingest all the applications we monitor. Our team interacts with this data through Grafana.The requirements will be familiar to anyone working at scale:

* Fast read/writes (target of 250ms for 8KB)
* Ability to scale (to a million metrics a second)
* Flexible granularity (rollups in seconds, minutes, hours, days)
* Easy to operate for our end users (especially not impact to applications)
We knew that however we gathered information, it would be visualized in Grafana. The Grafana UI is really powerful and gives us the ability to write custom plugins for whatever backend data source we choose to use, giving us the freedom and flexibility we will need to scale. We went with MQE, the [metrics query engine built by Square](https://github.com/square/metrics). MQE lets us build robust queries and create functions to run more advanced transformations on our data. MQE also queries from [Blueflood](http://blueflood.io/), which we use to perform rollups on our data to give us the necessary granularity without compromising the statistical relevance of the data. All this data is stored in [Cassandra](http://cassandra.apache.org/), which we like because it’s distributed, fast, and can support the scale of our enterprise.

#### Q: Beyond the base requirements, what specific challenge was on your mind as you selected tools?

***Staples:*** In the past we’ve had difficulty collecting enough data from every application and system we run on, which has lead to a plethora of monitoring tools in our environment. We needed to standardize without losing any flexibility on what we specifically measure and where we publish the data.

The ability to write our own Snap plugins has given us the flexibility to capture the right data from the right machines. One of the first plugins we wrote was to publish to Blueflood, where we publish dozens of operating system level metrics from collectors in [the Plugin Catalog](https://github.com/intelsdi-x/snap/blob/master/docs/PLUGIN_CATALOG.md).

[**Staples-Inc/snap-plugin-publisher-blueflood**  
*snap-plugin-publisher-blueflood - A snap blueflood publisher*github.com](https://github.com/Staples-Inc/snap-plugin-publisher-blueflood "https://github.com/Staples-Inc/snap-plugin-publisher-blueflood")[](https://github.com/Staples-Inc/snap-plugin-publisher-blueflood)We found we needed a few other plugins early on in our testing. We ran into a snag when we almost took down one of our load balancers by maxing out the connections. This pointed out that we had no good way to track and trend these metrics, which led us to write the netstat plugin:

[**Staples-Inc/snap-plugin-collector-netstat**  
*snap-plugin-collector-netstat - Collect TCP connection metrics for the snap telemetry framework*github.com](https://github.com/Staples-Inc/snap-plugin-collector-netstat "https://github.com/Staples-Inc/snap-plugin-collector-netstat")[](https://github.com/Staples-Inc/snap-plugin-collector-netstat)With just a couple lines of code we were able to track TCP connections, not only for our app, but all of the apps in our environment. And when I say “just a couple lines of code,” I mean it. Here is the *GetMetricTypes* method which could not be simpler to implement.

#### Q: What is your biggest takeaway from this experience?

***Staples: ***It’s been a shift for us as an organization to build rather than buy, and we are really investing in our engineers to build top of the line solutions. Working closely with members of the community and collaborating on Open Source projects lets us solve problems quickly and bring new points of view to our solutions.

![](/img/1*Uc-Ey0te8v80aV15zR_Jhg.png)Go is a fast, reliable programming language and a great up-and-coming developer communityMaking the decision for the team to learn the [Go programming language](http://golang.org) and do all development in Go allowed us to consume and contribute to a growing stack of infrastructure tools. We like Go because it is scalable and reliable, and it was quick for the team to pick it up and start coding.

#### Q: Where should people go if they want to contribute to your project?

***Staples: ***Each part of our stack (Snap, Cassandra, Blueflood, MQE, Grafana) are open source and welcome contribution. We like seeing more developers and administrators using these tools to mature each piece of the stack.

**We have openings** on our team as well if someone is interested in doing this work full-time! You can (and should!) [**apply here**](http://careers.staples.com/jobs/global-technology/principal-software-engineer-ecomm-framingham-14587282/).

### What We’ve Learned at Intel

Digging into telemetry has been [my call to arms](https://medium.com/intel-sdi/my-how-to-for-the-snap-telemetry-framework-e3bb641bc740#.w4qxrzdjp) for the last year.

The systematic collection, processing and publishing of metrics resonates whether you run in a container, a VM, or bare metal. While my team focuses on making telemetry flexible and reliable at scale, it’s important to think beyond the metrics to the much bigger picture of an infrastructure, and ultimately, how it can change a business.

Staples is a mature Enterprise with all the real challenges that comes with years of operations, multiple initiatives, and heterogeneous infrastructure. The incredibly positive takeaway from their adoption is that **Snap meets their need**: an extensive plugin catalog, simple plugin authoring, flexible scheduling of collection, and light CPU footprint hits home for them.

The challenge raised by their adoption is to continue to mature our Open Source practices to allow those outside of our team to be as aware of how to use Snap as we are. This means what all projects have to do: continue to improve our documentation, contributor experience, write more tests, and keep things as simple as possible.

### Get Involved In Person and Online

Both Staples and Intel will be [at GrafanCon 2016](http://grafanacon.org/) to share our stories of open source software and real-time monitoring. If you’re in the NYC area or can get down there, it will be a worthwhile place to be!

![](/img/1*OBhDYPJ9iSy3sHSf4THs4Q.jpeg)We also have a growing tribe of contributors extending into every type of data center user. Now we need you. Whether you want to [write your own plugin](https://github.com/intelsdi-x/snap/blob/master/docs/PLUGIN_AUTHORING.md) or [give feedback on documentation](https://github.com/intelsdi-x/snap#getting-started), you make Snap better. Join [our Slack team](http://slack.snap-telemetry.io) and say hello.

*This article was originally published [on Medium](https://medium.com/@mbbroberg)*