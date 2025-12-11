---
created: 2025-12-11 Thu 10:51am
updated: 2025-12-11 Thu 11:17am
share: true
type: garden
state: sprout
title: AI Coding Agent Product Perspective
slug: /ai-coding-agent-product-perspective
filename: ai-coding-agent-product-perspective
date: 2025-12-11
---

# AI Coding Agents: A Product Perspective

> >  Last updated: 2025-12-11
> *My perspective on this is changing rapidly. I'm learning new things about these tools daily.*

I'm spending time with AI coding tools through a product lens rather than a feature comparison. This is the start of a series where I'll break down what these tools are actually selling, who they're built for, and what their positioning tells me about where this market is heading.

## The Split I'm Seeing

The landscape is organizing itself around two distinct product strategies. I don't think this is accidental.

### Full IDE Replacements

Some teams are building complete editing environments with AI as the core organizing principle. 

When you build a complete environment, you're betting that developers will switch their entire workflow for a meaningfully better AI experience. Higher customer acquisition cost, but potentially higher lifetime value when it works.

### Extensions to Existing IDEs

Others are augmenting the tools developers already use.

When you build into existing environments, you're betting that developers value continuity and want AI as enhancement rather than replacement. Lower barrier to trial, but you're always at risk of the platform building your feature natively.

## The VS Code Fork Dilemma

Here's something I just learned that changes how I think about this market: **all three full IDE replacements are VS Code forks.**

Cursor and Windsurf both directly fork VS Code's open source codebase. Antigravity is really interesting–there's active debate about whether it's a direct VS Code fork or actually a fork of Windsurf (which would make it a fork of a fork). The latter makes sense since Google acquired the Windsurf team including CEO Varun Mohan in July 2024 for $2.4 billion and licensed the technology. Mohan himself confirmed Antigravity "came from his team."

This creates a tension. All three products are building businesses on top of a codebase controlled by Microsoft, which also owns GitHub and has Copilot deeply integrated into native VS Code. Recently, [Microsoft started blocking official extensions like C/C++ tooling](https://github.com/VSCodium/vscodium/issues/2300) from working in these forks. Cursor had to scramble to implement open source alternatives.

The fork strategy looks faster at first–you get a familiar interface and extension compatibility–but you're building on your competitor's foundation. That's a business model risk that shapes everything downstream.

### Balancing Point: Why Extensions Work Better Than I Expected

The consolidation around VS Code and its extension patterns makes the extension approach more viable. You inherit widespread distribution and a familiar developer experience. The challenge is that you're competing with "good enough" built-in experiences and you can't modify the core IDE to truly differentiate.

JetBrains enthusiasts remain loyal, though, in my experience. That fragmentation creates overhead for both strategies—full IDEs need to convince people to switch everything, extensions need to support multiple platforms.

## What I'm Tracking

As I dig into each tool, I'm watching for:

**Product decisions that reveal strategy.** Why did Cursor build Composer the way they did? What does Augment's "enhance prompt" feature tell me about their theory of how developers work?

**Critical user journeys.** What has to go right for someone to become a daily user? Where are the moments of delight versus friction? Where do people drop off?

**Value stream integration.** Do they speed up the idea-to-code loop? The code-to-review loop? Each intervention point attracts different users and creates different lock-in.

## Special Cases Worth Watching

**VS Code + Copilot** deserves its own analysis. Microsoft owns both the platform and the agent, which fundamentally changes the competitive dynamics.

**Claude's everywhere approach** feels different too—native experience in the app, CLI experience, and VS Code extension. I'm still figuring out what that multi-surface strategy means.

## How This Connects

I keep coming back to treating [everything as a product](/articles/work-as-a-game-both-finite-and-infinite). These tools aren't just features. They're betting on different theories about how developers want to work and what they're willing to change.

The [Product Operating Model](/articles/takeaways-from-transformed-by-marty-cagan) lens is useful here. Are these solving customer problems in ways that work for the business? Or building features that sound good but don't change behavior?

I suspect there's an [Explorer/Villager/Town Planner](/articles/on-explorers-villager-and-towns-planners-of-simon-wardley) pattern too. Explorers might try everything and build workflows around what's possible. Villagers want to productize patterns. Town Planners need standardization and support.

## What's Next

I'm tinkering with many of these at the same time. I'm quickly building an opinion of my favorites: Antigravity feels great and Augment Code's' "enhance prompt" feature keeps surprising me.

I want each teardown to follow a similar structure so you can compare across tools. But I'm also paying attention to what makes each one unique. The differences tell more than the similarities.

This is going to be a living collection. As these tools evolve and as I understand them better, I'll update my thinking. That's the point of a [digital garden](/articles/make-obsidian-a-digital-garden) approach.

--

*PS - What I'm still figuring out: How much does the underlying model (GPT-4, Claude, Gemini) matter versus the product wrapper around it? And what does the VS Code fork tension mean long-term for these businesses? I have theories but need more time with each.*