---
created: 2014-04-25 Fri 12:00am
edited: 2024-01-28 11:44:58
updated: 2025-02-14 Fri 8:45pm
title: Infrastructure as a Means, not an End
slug: ../infrastructure-as-a-means-not-an-end
filename: 2014-04-25-infrastructure-as-a-means-not-an-end
date: 2014-04-25
blog: true
---

> *In philosophy, the term means to an end refers to any action (the means) carried out for the sole purpose of achieving something else (an end)*

I run two small clusters of ESXi hosts for the SEs at Infinio.

They act as a microcosm of real infrastructure: shared amongst the team, at the will of the network team, often capacity or performance constrained, occasionally faulty for unexplained reasons.

What’s most realistic about this side-task is that the goal of my job is not managing this cluster. My work uses the clusters as a resource for my actual work. Maybe I need to test new code. Maybe I need to document a user experience. No matter the end, running the infrastructure is not what my work is about. It’s simply a means.

This last point resonates with me most of all. As I look to experience what my customers experience, I find this setup to be a perfect way to do so. Running a small cluster in order to demo our product makes it a means to a much more business-centric end. If something is broken for a while, I mostly don’t care. If it doesn’t work when I need to demo, I care a great deal.

That’s real world infrastructure for you, and probably is more true than we like to admit. Those who prioritize their tasks do not always fix what’s broken. They fix what’s broken before it is needed and as quickly as they can while doing it well. It’s a different mindset.

This experience teaches me two lessons I wish to share with you:

If you want to sell infrastructure (that includes you, Marketing), you should run one. No matter how small. 

As organizational silos fall between storage, network, and compute you can imagine even less time spent twiddling with infrastructure knobs. Automation – even if it’s _good enough_ automation – will eat up these menial tasks in even the smallest organizations. The only people left needing to know the details will be Technical Support.