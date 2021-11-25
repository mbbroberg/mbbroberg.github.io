---
date: "2016-07-01T00:00:00Z"
tag:
- monitoring
title: Introduction to ad hoc telemetry with Snap and Grafana
---

  *What makes Snap different?*

That’s the right question to ask and one I answered hundreds of times in the last couple weeks. It began at O’Reilly Velocity as Ops-minded teams were curious about the introduction of Snap to the Open Source toolkit. The conversations continue this week at (my first) [Monitorama](http://monitorama.com), which is the most amazing Operations-centric conference I’ve ever attended. There are a lot of familiar faces across the two and for good reason: people want to understand the how and why of data center operations.

But to the question at hand: **why Snap** vs this or that?

![](/img/1*MaYIUQGtqyU1cdTut7BuDA.jpeg)Me making hand motions while I demo Snap at Velocity Conf 2016.**It’s about the API.** The design of Snap allows for the collection, processing and publishing of telemetry AND the administration of it to be managed. And that makes all the difference.

*“Give me a for instance.”*

Okay, let’s get concrete. You have a site outage. Your monitoring shows that you have an issue with your database, but your day-to-day view of the problem is at a lower granularity than you need to find the culprit. That’s common — most people monitor at a 1 to 5 minute fidelity, but like to get down to 1 *second or less *during an issue. How do you add this greater visibility into the database? Well, you usually need to setup an entirely new telemetry system to even see the same stats at a greater granularity (let alone *new *metrics). That means installing software on servers that are in production and having issues as we speak. Alternatively, with Snap, we can stream stats directly to Grafana.

![](/img/1*ilxjE2d2iOAqqOU_pEhtjg.png)#### Configuring my environment for *ad hoc *queries

Let’s set something up and take a look around. We need Grafana and Snap running at a minimum, so here is the quick way to see the power of the API.

I’ve covered how to get Snap running in a few different ways, so I’ll skipping repeating it here. If you’d like to take this part step-by-step, [see this tutorial](https://medium.com/intel-sdi/my-how-to-for-the-snap-telemetry-framework-e3bb641bc740#.vgodp7djb). If you want to take the source code route, [run through this refresher](https://medium.com/intel-sdi/setting-up-your-snap-development-environment-ab010e861cab#.a13ejl65l) on environment configuration for Go development. You can also follow practices outlined under [Running Snap](https://github.com/intelsdi-x/snap#running-snap) to install *snapd* and load the psutil plugin that way. With all those options outlined, we’ll move on.

With Snap installed, we can start the daemon and load a collector. This time we’ll use the psutil plugin:

$ cd ~/Desktop/snap-v0.14.0-beta/bin  
$ ./snapd -t 0 &   
$ ./snapctl plugin load ../plugin/snap-plugin-collector-psutil**Disclaimer**: these paths are relative, so be sure to point to wherever you put *snapd* and the plugin.

Snap is running and loaded with the only plugin in we need for this example. Let’s get Grafana up locally. If you’re comfortable with Go development, you can build from source:

$ go get github.com/grafana/grafanaOr if you have the good fortune to be on OS X, use [homebrew](http://docs.grafana.org/installation/mac/):

brew install grafana/grafana/grafanaGrafana has an app model to extend its functionality. We need the Snap App ([source](https://github.com/raintank/snap-app)), which is easily installed on the command-line:

$ grafana-cli --pluginsDir=”/usr/local/var/lib/grafana” plugins install raintank-snap-appinstalling raintank-snap-app @ 0.0.3  
from url: <https://grafana.net/api/plugins/raintank-snap-app/versions/0.0.3/download>  
into: /usr/local/var/lib/grafana✔ Installed raintank-snap-app successfullyRestart grafana after installing plugins . <service grafana-server restart>Now we can start Grafana and point to the app along with our other default configuration requirements:

$ grafana-server --config=/usr/local/etc/grafana/grafana.ini --homepath /usr/local/share/grafana cfg:default.paths.logs=/usr/local/var/log/grafana cfg:default.paths.data=/usr/local/var/lib/grafana cfg:default.paths.plugins=/usr/local/var/lib/grafanaAnd we see from the output that it installs the app and is up and running:

2016/06/28 10:32:47 [I] Starting Grafana... truncated ... 2016/06/28 10:32:47 [I] Plugins: Adding route /public/plugins/raintank-snap-datasource -> /usr/local/var/lib/grafana/raintank-snap-app/dist/datasource  
2016/06/28 10:32:47 [I] Plugins: Adding route /public/plugins/raintank-snap-app -> /usr/local/var/lib/grafana/raintank-snap-app/dist  
2016/06/28 10:32:47 [I] Listen: <http://0.0.0.0:3000>Now we can [login to Grafana at port 3000](http://127.0.0.1:3000). From there:

1. Click the top-left icon and open Plugins
2. Click the Apps tab, open Snap App, Enable it
3. From the top-left icon again, go to Data Sources
4. Add a new data source of type Snap DS pointing to your *snapd* instance (including port, which is 8181 by default)
5. Start a new Dashboard with a Graph panel, select Snap DS as the data source
6. Create the task! Name it, choose an interval and metrics, then start it
7. Click watch to see live data stream from Snap to the graph just like you would using *snapctl task watch*
![](/img/1*sXlgFQpongx-8cn-6TPWwg.png)By taking these steps, you configured a Task in Snap all through the API.

I’ve already wrote about how [Tasks are a powerful abstraction](https://medium.com/intel-sdi/the-guts-of-tasks-how-snap-runs-8c5d2405ea61#.y8jibkpg3) for telemetry, but they take on a life of their own once you bring them to a GUI like Grafana.

#### What will you measure next?

Telemetry is exciting when you have the right data in the right format and sent to the right places. I would love to see more examples of what you measure for day-to-day Ops. If there isn’t a collector for it in the [Plugin Catalog](https://github.com/intelsdi-x/snap/blob/master/docs/PLUGIN_CATALOG.md), I would love to see you [build your own](https://github.com/intelsdi-x/snap/blob/master/docs/PLUGIN_AUTHORING.md)!

*This article was originally published [on Medium](https://medium.com/@mbbroberg)*