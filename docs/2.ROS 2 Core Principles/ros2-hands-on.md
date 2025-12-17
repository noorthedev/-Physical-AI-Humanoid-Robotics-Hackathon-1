---
title: "ROS 2 Core Concepts"
description: "Nodes, Topics, Services, Actions, DDS — Essential Building Blocks for Humanoid Robotics"
---


# ROS 2 Core Fundamentals

This chapter explores the essential building blocks of ROS 2 introduced in Module 1, with diagrams, practical patterns, and conceptual guidance for humanoid robotics.

## Node Architecture

Single Responsibility: Each node executes a focused task.

Lifecycle Management: Plan startup, shutdown, and error recovery.

Pro Tip: Think of nodes as independent mini-agents inside your robot.

## Communication Channels

Use topics to stream sensor readings and state updates.

Apply consistent naming standards and define message rates.

Hackathon Hint: Clean topic structures reduce debugging time.

## Service Calls

Short, synchronous interactions such as calibration, configuration, or one-time requests.

Perfect for simple “ask-and-receive” operations between nodes.

## Action Tasks

Handle long-duration operations that need feedback and can be canceled (e.g., navigation, manipulation).

Ideal for executing complex humanoid behaviors.

## Quality of Service (QoS) Guidelines

High-frequency sensors → BEST_EFFORT for speed and efficiency.

Critical control channels → RELIABLE with defined deadlines.

Always record QoS decisions in your design documentation.

## Executors & Scheduling Strategy

Select an executor: single-threaded or multi-threaded based on task requirements.

For real-time performance, isolate critical threads and assign priorities.

Hackathon Tip: Proper scheduling ensures agile, responsive robots.

## Development Workflow

Maintain consistent naming for topics, services, and actions.

Use a shared data dictionary for team alignment.

Draft conceptual test plans before implementation.

## System & Sequence Diagrams

System Diagrams: Illustrate the flow from Perception → Planner → Controller.

Sequence Diagrams: Capture action lifecycles, feedback loops, and error handling.

⚠️ Note: This chapter focuses on conceptual understanding. Sample code and practical examples are in Appendix → Resources. Use these as guidance for your ROS 2 projects.