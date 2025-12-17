---
title: "Module 5: Advanced AI & Control"
description: "Reinforcement learning, sim-to-real transfer, hierarchical controllers, and subagent design"
module: 5
duration: "8-12 hours"
prerequisites: "Simulation, ROS 2, Python"
objectives:
  - Learn conceptual reinforcement learning for robots
  - Plan sim-to-real transfer using domain randomization
  - Design hierarchical controllers and reusable subagent skills
---

# Module 5: Advanced AI & Control
## Core Concepts

**Reinforcement Learning (RL):** Understand conceptual pipelines, reward shaping, and exploration strategies for robotics tasks.

**Sim-to-Real Transfer:** Use domain randomization and parameter recording to bridge simulator models to real-world deployment.

**Hierarchical Control:** Combine high-level planners, mid-level skills, and low-level controllers for modular robot behavior.

**Subagents & Skill Libraries:** Define reusable agent skills, capabilities, and interfaces for complex task execution.

## Lab Plan (Design Only)

**1• RL Task Design:**

Define environment states, actions, and reward signals.

Specify simulation-to-edge test scenarios.

**2• Sim-to-Real Checklist:**

Domain randomization parameters (lighting, friction, object positions).

Record system IDs, robot dynamics, and sensor configurations.

**3• Hierarchical Controller Layout:**

Map high-level commands → mid-level skills → low-level actuators.

Document message schemas between layers (ROS topics/services/actions).

**4• Subagent Skill Library:**

Define skill interfaces and expected inputs/outputs.

Plan evaluation strategies for individual skills and full skill sequences.

**5• Evaluation & Safety (Conceptual):**
 
Success metrics: task completion, replans, and execution time.

Safety checks: collision avoidance, torque limits, and fail-safe stop.

## Deliverables (for students)

One-page design document showing RL pipeline, sim-to-real parameters, hierarchical controller structure, and subagent definitions.

Optional: diagram mapping high-level plans to skill library execution.