<!-- Sync Impact Report:
Version change: 0.0.0 → 1.0.0
List of modified principles:
  - PROJECT_NAME: [PROJECT_NAME] → Book Project Assistant
  - PRINCIPLE_1_NAME: [PRINCIPLE_1_NAME] → MODULE 1 — The Robotic Nervous System (ROS 2)
  - PRINCIPLE_2_NAME: [PRINCIPLE_2_NAME] → MODULE 2 — The Digital Twin (Gazebo & Unity)
  - PRINCIPLE_3_NAME: [PRINCIPLE_3_NAME] → MODULE 3 — The AI-Robot Brain (NVIDIA Isaac)
  - PRINCIPLE_4_NAME: [PRINCIPLE_4_NAME] → MODULE 4 — Vision-Language-Action (VLA)
Added sections:
  - Module Sections
  - Development Rules & Hardware Recommendations
Removed sections:
  - [SECTION_2_NAME] (placeholder removed as content filled)
  - [SECTION_3_NAME] (placeholder removed as content filled)
Templates requiring updates:
  - .specify/templates/plan-template.md: ⚠ pending
  - .specify/templates/spec-template.md: ⚠ pending
  - .specify/templates/tasks-template.md: ⚠ pending
  - .specify/templates/commands/*.md: ⚠ pending
  - CLAUDE.md: ⚠ pending
Follow-up TODOs: None
-->
# Book Project Assistant Constitution

## Core Principles

### MODULE 1 — The Robotic Nervous System (ROS 2)
ROS 2 Nodes, Topics, Services; Python agent integration with rclpy; URDF for humanoid design.

### MODULE 2 — The Digital Twin (Gazebo & Unity)
Physics simulation and collisions; High-fidelity rendering and human-robot interaction; Sensor simulation: LiDAR, Depth Cameras, IMUs.

### MODULE 3 — The AI-Robot Brain (NVIDIA Isaac)
Photorealistic simulation; Isaac ROS: VSLAM, navigation, reinforcement learning; Nav2 path planning for biped humanoids.

### MODULE 4 — Vision-Language-Action (VLA)
Voice-to-Action: Whisper integration; Cognitive planning using LLMs; Capstone: Autonomous Humanoid with multi-step planning and vision.

## Module Sections

For each module, include:
- Module Overview
- Learning Outcomes
- Key Topics
- Tools & Technologies
- Practice Labs
- Mini-Project
- Module Connection

## Development Rules & Hardware Recommendations

### Development Rules
- When creating new modules, use `create-new-feature` with properly escaped JSON to avoid Bash/PowerShell syntax errors.
- Maintain sequential logic: Module 2 builds on Module 1, Module 3 on Module 2, Module 4 on Module 3.
- Output in Markdown suitable for Docusaurus.
- Include practical examples, mini-projects, and hardware/software requirements.
- For each module, provide code snippets, diagrams, and references where applicable.
- Make content interactive: integrate RAG chatbot features in each chapter.

### Hardware & Lab Recommendations
- Include sections describing Digital Twin Workstation, Physical AI Edge Kits, and Robot Lab options.
- Include Cloud-Native alternatives if users lack RTX-capable machines.
- Include approximate pricing, parts lists, and recommended setups.

## Governance
This constitution governs the development and content of the 'Physical AI & Humanoid Robotics' textbook project. Amendments require documentation, approval, and a migration plan. All development must adhere to the principles outlined in this constitution.

**Version**: 1.0.0 | **Ratified**: 2025-12-06 | **Last Amended**: 2025-12-06
