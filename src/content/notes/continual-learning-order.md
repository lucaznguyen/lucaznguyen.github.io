---
title: "Draft: Task Order as a Continual Learning Variable"
date: "2026-01-05"
description: "A short placeholder note on why task order deserves explicit measurement in continual learning experiments."
tags:
  - Continual Learning
  - Technical Notes
  - Research Practice
draft: true
---

## Working question

When continual learning systems fail, how much of the failure comes from the method and how much comes from the sequence of tasks?

## Draft outline

- Treat task order as an experimental variable, not only a random seed.
- Track forward transfer and backward transfer separately.
- Report whether a method is stable under easy, hard, and adversarial orders.
- Build small diagnostics before claiming general improvements.

This placeholder will become a compact checklist for designing continual learning experiments.
