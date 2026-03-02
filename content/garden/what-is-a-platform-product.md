---
share: true
type: garden
state: sprout
title: What is a Platform Product?
slug: /what-is-a-platform-product
filename: what-is-a-platform-product
date: 2026-03-02
created: 2026-03-02 Mon 2:13pm
updated: 2026-03-02 Mon 2:13pm
---

Notes on researching the related but not identical terms floating around in the industry. 

# My Resulting Definition (for Now)

- Recommendations outlined here. 

Platforms become clear in their use case: 

> When customer value is driven by economies of scale, powered by self-service offerings that abstract underlying complexity

When discussing the product team, I describe it as:

> Team responsible for designing, building, and maintaining the foundational components that **enable other teams**

I don't 

1. Emphasize "internal" vs "external" – there will be platforms in both cases
2. Consider "platform" and "experience" as mutually exclusive definitions – every platform needs to remain accountable for its experience and I think that wording conflates the two concepts

Team Topology does a good job exploring these points. 

# Platform Engineering

**[Team Topology](https://teamtopologies.com/key-concepts)**

> a **platform team is a grouping of other team types that provide a compelling internal product to accelerate delivery by Stream-aligned teams**

The "other teams" in TT theory include:

- **Stream-aligned teams** deliver direct value to customers along a value stream. They own the outcomes.
- **Enabling teams** temporarily boost skills in other teams, then move on
- **Complicated subsystem teams** handle complex components requiring specialist knowledge

## [Gartner](https://www.gartner.com/en/infrastructure-and-it-operations-leaders/topics/platform-engineering)

> Platform engineering is an emerging trend intended to modernize enterprise software delivery, particularly for digital transformation. A dedicated product team creates and maintains the engineering platform, which is designed to support the needs of software developers and others by providing common, reusable tools and capabilities, and interfacing to complex infrastructure

## [The New Stack](https://thenewstack.io/platform-engineering/)

> Platform engineering is the discipline of building workflows, toolchains, platforms and documentation to support application teams in their delivery of business value. The platform engineering team sits on the horizontal, serving cross-company needs so the vertical application teams’ can serve their end users.

More details:

> It focuses on enabling an application team to get up and running without the cognitive overload and overlap of each team learning to be cloud native. Ideally, it enables them to do it without a human in the loop always having to approve things either.

## [**Tech Target**](https://www.techtarget.com/searchitoperations/definition/platform-engineering)

> Platform engineering is a specialized discipline within software development that focuses on designing, building, maintaining and improving the toolchains and workflows software developers use. Platform engineering provides comprehensive and consistent tools and processes, which enables developers to focus on software development instead of managing underlying toolchains.

# Internal Developer Platform

[https://internaldeveloperplatform.org/what-is-an-internal-developer-platform](https://internaldeveloperplatform.org/what-is-an-internal-developer-platform/)

> An Internal Developer Platform (IDP) is built by a platform team to build golden paths and enable developer self-service.

Necessary components:

|   |   |
|---|---|
|[**Application Configuration Management**](https://internaldeveloperplatform.org/core-components/application-configuration-management/)|Manage application configuration in a dynamic, scalable and reliable way.|
|[**Infrastructure Orchestration**](https://internaldeveloperplatform.org/core-components/infrastructure-orchestration/)|Orchestrate your infrastructure in a dynamic and intelligent way depending on the context.|
|[**Environment Management**](https://internaldeveloperplatform.org/core-components/environment-management/)|Enable developers to create new and fully provisioned environments whenever needed.|
|[**Deployment Management**](https://internaldeveloperplatform.org/core-components/deployment-management/)|Implement a delivery pipeline for Continuous Delivery or even Continuous Deployment (CD).|
|[**Role-Based Access Control**](https://internaldeveloperplatform.org/core-components/role-based-access-control/)|Manage who can do what in a scalable way.|

# Enterprise Enablement

Mike Calvo's organization is working from a straightforward definition:

> Platforms are products used to build other products

**Goals**

- Accelerate development
- Drive consistency
- Functional value
- Horizontal nature (applies to multiple apps, domains, uses)

# Platform Definition by Enterprise Product

> Teams tasked with maintaining legacy “platforms”, either custom built or off-the-shelf, on which solutions are built (e.g., ERP)

That an existing definition here that's definitely not capturing what I'm after.
