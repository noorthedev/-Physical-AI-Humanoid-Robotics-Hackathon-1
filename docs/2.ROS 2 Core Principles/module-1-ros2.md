---
title: "Module 1: The Robotic Nervous System - ROS 2"
description: "Understanding ROS 2 as the central nervous system of humanoid robots"
slug: /docs/2.ROS 2 Core Principles/module-1-ros2
---

# Module 1: The Robotic Nervous System - ROS 2

## Unlocking the Brain of Humanoid Robots

Welcome, future architects of Physical AI! This module takes you through **ROS 2**, the central nervous system of humanoid robots, enabling AI to perceive, plan, and act in the physical world.

---

## Learning Outcomes

By the end of this module, you will be able to:

* Explain the key improvements of ROS 2 over ROS 1.  
* Describe nodes, topics, services, and actions and their usage patterns.  
* Map AI agent workflows (perception, planning, control) onto ROS 2.  
* Plan and visualize humanoid robot models with URDF/Xacro and RViz2.  
* Apply conceptual debugging techniques and follow best practices for system design.

---

## Why ROS 2 is Essential

- Reliable, distributed communication via DDS.  
- Real-time support with configurable QoS settings.  
- Language-agnostic ecosystem (Python/C++ interop).  
- Broad community backing and strong industry adoption.

---

## Core Concepts (High-Level Overview)

### Nodes, Topics, Publishers/Subscribers
Nodes are independent processes. Topics are channels for asynchronous data flow. Publishers send, subscribers receive.

### Services vs Actions
- **Services:** Synchronous request/response for short tasks.  
- **Actions:** Long-running operations with feedback and cancellation support.

### DDS & QoS
DDS manages discovery and enforces message quality (reliability, durability, deadlines) for consistent communication.

### Real-time & Safety
ROS 2 supports real-time patterns, but true hard real-time requires careful OS/kernel setup and robust system planning.

---

## Hands-on (Conceptual Workflow)

1. **Workspace Setup:** Organize a workspace with dedicated packages for perception, planning, and control.  
2. **Node Planning:** Define nodes, responsibilities, and the topics/services/actions they interact with.  
3. **Message Architecture:** Outline high-level messages with clear fields and semantics.  
4. **Simulation Strategy:** Design test scenarios to validate communication and handle failures.  
5. **Debug Checklist:** Conceptual checks for QoS mismatches, message size, stalled executors, etc.  

> ⚠️ Note: This module focuses on concepts. Reference implementation code is available in Appendix → Resources if you want runnable examples.
