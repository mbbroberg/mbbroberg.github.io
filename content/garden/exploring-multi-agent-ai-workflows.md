---
created: 2026-04-16 Thu 8:02am
updated: 2026-04-19 Sun 7:56pm
share: true
type: garden
state: sprout
title: Exploring Multi-Agent AI Workflows
slug: /exploring-multi-agent-ai-workflows
filename: exploring-multi-agent-ai-workflows
date: 2026-04-16
---

I've been working through when AI is worth it and when it becomes noise. On individual tasks, the tipping point is [getting clearer to me](https://mbbroberg.fun/garden/when-and-where-i-stop-using-ai). What potentially changes the game is multi-agent workflows–teams of agents tackling complex problems from multiple angles, each building on the last. The framing of agents-as-people makes me uneasy; it blurs where responsibility actually sits. But that instinct can't become a reason to miss something genuinely transformative. So here's my next frontier.

## Framing the goal

I've been sitting with a new idea: what if I could staff a product management team inside my Obsidian vault?

Not a chatbot or an army of clones–a team of complementary perspectives that yield something better than any one of them could alone, working sequentially on the same problem, each building on what the last produced. The use case is personal: I want to pressure test my theories around Product Operating Models, and I don't have enough free time to test them as often as a virtual team could. This is simulation, not validation of reality.

Thinking through team composition helped me land on three roles: a Strategy-oriented PM who pushes toward bold, concise outcomes; a ProdOps PM who stress-tests whether what we build is operable at scale; and an analytical PM trusted for their skeptical read on assumptions.

The question wasn't just *who* they are but *how* to run them. I needed sequencing that didn't require copying between tools manually.

## The landscape I explored

A few tools worth knowing about if you're poking at this space.

**[Claude Code](https://docs.claude.com/en/docs/claude-code/overview)** is where I started mentally. It has native file system access, so it can read and write directly to a vault. Great for single-model agentic work. Hits a ceiling fast when you want genuine multi-agent sequencing with distinct personas.

**[OpenCode](https://opencode.ai)** is a terminal-based interface that lets you swap models mid-session–Claude, Gemini, GPT-4o. Solid for exploration. Using its handoff features to pass between agents gets interesting, but it's still one session, one reasoning thread, with awkward transitions.

**I'm here** 👉 **[CrewAI](https://docs.crewai.com)** is where the multi-agent story starts to feel possible for me. Config-driven agents with specific roles, goals, and backstories, chained into tasks where each agent sees what the prior one produced. That sequencing is the thing. It's structured enough that you don't need to architect a graph from scratch.

**[LangGraph](https://langchain-ai.github.io/langgraph/)** is the more powerful option if you need conditional routing–a reviewer flagging a gap and looping work back to the strategy layer, for instance. More setup, more control. I expect to end up here eventually; CrewAI is the right starting point.

## What I'm actually building

To get this POM system going, I scoped a smaller vault (~200 files) where:

- Persona files in `_agents/` define each team member's role and voice
- Context files in `_context/` give the crew shared background
- I drop a task note in `inbox/` and run the crew against it
- Output lands in `working/` with a decision log showing each agent's reasoning, assumptions, and flags

Claude helped me structure the initial configuration, but the decision log was my addition–I've come to value explicit decision records. Each agent appends their thinking before writing output: what judgment calls they made, what they assumed, what gave them pause. This makes troubleshooting agent behavior legible and persistent.

What I'm still figuring out is whether the personas I wrote are any good. That's the real work–the code that stitches them together is throwaway, but a well-framed agent personality is where the value lives. A reviewer that never flags anything isn't a reviewer, it's a yes-and machine. Getting that adversarial energy into a system prompt without it becoming performatively contrarian is a craft problem, and quite possibly a new expertise to grow.

More to come. If you're building something similar, I'd genuinely like to hear about it.
