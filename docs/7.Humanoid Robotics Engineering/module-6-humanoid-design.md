---
title: "Module 6: Humanoid Design"
description: "Kinematics, dynamics, URDF/Xacro, bipedal locomotion, manipulation"
module: 6
duration: "8-12 hours"
prerequisites: "Mechanics basics, ROS 2"
objectives:
  - Conceptually model humanoid kinematics with URDF/Xacro
  - Understand dynamic stability, ZMP, and gait cycles
  - Plan manipulator design and end-effector control
---

# Module 6: Designing Humanoids
## Core Concepts

**URDF/Xacro Modeling:** Modular design, reusable components, and link/joint hierarchies.

**Kinematics:** Forward and inverse kinematics, joint chains, and workspace/task-space mapping.

**Dynamics & Stability:** Zero Moment Point (ZMP), Center of Mass (CoM) tracking, gait cycle principles.

**Hands & Manipulation:** Grasp types, compliance control, and sensor integration for end-effectors.

## Lab & Design Plan (Conceptual)

**Humanoid Limb Design Checklist:**

Define link dimensions, joint limits, and actuator placement.

Reference modular URDF/Xacro patterns from Appendix resources.

**Gait Analysis Plan:**

Describe step timing, stride length, foot placement, and stability margins.

Include conceptual plots of CoM vs ZMP for dynamic walking.

**Manipulator & Hand Planning:**

Choose grasp types and corresponding sensors.

Plan end-effector control logic and compliance strategies.

## Deliverables (for students)

One-page design spec for a humanoid limb including URDF/Xacro diagrams.

Gait analysis outline with step timing and stability considerations.

Optional: conceptual manipulator design with sensor integration notes.