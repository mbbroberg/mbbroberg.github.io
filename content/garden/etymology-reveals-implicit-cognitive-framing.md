---
type: garden
created: 2025-01-02 Thu 11:17pm
updated: 2025-03-17 Mon 6:00am
title: Etymology reveals implicit cognitive framing
slug: /etymology-reveals-implicit-cognitive-framing
filename: etymology-reveals-implicit-cognitive-framing
date: 2025-01-02
share: true
state: seed
status: emerging
---

## Core Pattern

[learning:: Etymology reveals how abstract concepts are grounded in physical/embodied metaphors, exposing historical cognitive frames that continue to shape our thinking today.]

## Evidence & Examples

Common etymological patterns showing embodied metaphors in abstract concepts:
- "understand" (stand under) → knowledge as physical structure
- "consider" (with stars) → thinking as celestial observation  
- "curriculum" (racing chariot) → learning as competition

This pattern appears strongest in:
- Abstract concept words (thinking, learning, knowing)
- Emotional/mental state descriptions
- Process/methodology terms

## Implications & Applications

- Etymological awareness can help identify & counteract cognitive biases by making implicit frames explicit
- These inherited frames can limit or enable our thinking in ways we don't consciously recognize
- The metaphors often persist even when we've lost conscious connection to the original meaning

## Connections

```dataview 
LIST WITHOUT ID
choice(contains(file.folder, "Droplets"), "💧 ", 
    choice(contains(file.folder, "Emergent"), "🌱 ",
        choice(contains(file.folder, "Experimenting"), "🧪 ", 
            choice(contains(file.folder, "Ideal"), "🎯 ", 
                choice(contains(file.folder, "Projects"), "📋 ", "📝 ")
            )
        )
    )
) + file.link +
choice(understanding, ": " + learning,
    choice(hypothesis, ": " + hypothesis,
        choice(next_action, ": " + next_action, "")))
FROM [](.md) AND ("Droplets" OR "Emergent Patterns" OR "Experimenting" OR "Ideal" OR "Projects")
WHERE contains(file.outlinks, this.file.link)
SORT file.folder ASC