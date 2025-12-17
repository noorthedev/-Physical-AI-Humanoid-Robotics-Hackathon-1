---
id: 1
title: Update Book Project Constitution with Initial Structure
stage: constitution
date: 2025-12-06
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: hc
command: /sp.constitution
labels: ["constitution","project-setup"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests:
---

## Prompt

```text
You are a Book Project Assistant specialized in AI-native technical textbooks for Physical AI & Humanoid Robotics.

Your task: Help create, structure, and maintain a complete textbook for a course in "Physical AI & Humanoid Robotics" using Spec-Kit Plus and Claude Code. Follow these rules carefully:

1. **Project Overview**
- Hackathon I: Build a textbook for teaching Physical AI & Humanoid Robotics.
- Objective: Students will bridge the gap between digital AI and physical humanoid robots using ROS 2, Gazebo, NVIDIA Isaac, and LLMs (GPT, Whisper).
- Deliverables:
    1. AI/Spec-Driven Book using Docusaurus, deployed to GitHub Pages.
    2. Integrated RAG Chatbot that answers questions from the book's content.
    3. Optional bonuses: reusable Claude Code Subagents, user signup/signin, content personalization, Urdu translation.

2. **Course Structure**
- Course Goal: Physical AI systems and Humanoid Robotics with embodied intelligence.
- Course Quarters: 13-week course with modules, labs, and capstone project.
- Modules:
    MODULE 1 — The Robotic Nervous System (ROS 2)
        * ROS 2 Nodes, Topics, Services
        * Python agent integration with rclpy
        * URDF for humanoid design
    MODULE 2 — The Digital Twin (Gazebo & Unity)
        * Physics simulation and collisions
        * High-fidelity rendering and human-robot interaction
        * Sensor simulation: LiDAR, Depth Cameras, IMUs
    MODULE 3 — The AI-Robot Brain (NVIDIA Isaac)
        * Photorealistic simulation
        * Isaac ROS: VSLAM, navigation, reinforcement learning
        * Nav2 path planning for biped humanoids
    MODULE 4 — Vision-Language-Action (VLA)
        * Voice-to-Action: Whisper integration
        * Cognitive planning using LLMs
        * Capstone: Autonomous Humanoid with multi-step planning and vision

3. **Module Sections**
For each module, include:
    - Module Overview
    - Learning Outcomes
    - Key Topics
    - Tools & Technologies
    - Practice Labs
    - Mini-Project
    - Module Connection

4. **Development Rules**
- When creating new modules, use `create-new-feature` with properly escaped JSON to avoid Bash/PowerShell syntax errors.
- Maintain sequential logic: Module 2 builds on Module 1, Module 3 on Module 2, Module 4 on Module 3.
- Output in Markdown suitable for Docusaurus.
- Include practical examples, mini-projects, and hardware/software requirements.
- For each module, provide code snippets, diagrams, and references where applicable.
- Make content interactive: integrate RAG chatbot features in each chapter.

5. **Hardware & Lab Recommendations**
- Include sections describing Digital Twin Workstation, Physical AI Edge Kits, and Robot Lab options.
- Include Cloud-Native alternatives if users lack RTX-capable machines.
- Include approximate pricing, parts lists, and recommended setups.

6. **Extra Features**
- Signup/Signin flow for students using Better-Auth.
- User personalization for chapter content based on software/hardware background.
- Option for translating chapters into Urdu.
- Integration of s
```

## Response snapshot

```text
The constitution has been successfully updated.

**New Version**: 1.0.0 (Major bump due to significant content addition and restructuring from template.)
**Files flagged for manual follow-up**:
-   `.specify/templates/plan-template.md`
-   `.specify/templates/spec-template.md`
-   `.specify/templates/tasks-template.md`
-   `.specify/templates/commands/*.md`
-   `CLAUDE.md`
**Suggested commit message**: `docs: amend constitution to v1.0.0 (initial project structure and governance)`
```

## Outcome

- ✅ Impact: Constitution updated with initial project structure.
- 🧪 Tests: N/A
- 📁 Files: 1 file modified
- 🔁 Next prompts: User to review constitution and proceed with further development.
- 🧠 Reflection: Successfully updated the constitution based on user input, ensuring all placeholders are filled and a Sync Impact Report is included. Fallback to agent-native PHR creation was successful after script failure.

## Evaluation notes (flywheel)

- Failure modes observed: create-phr.sh script not found.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment: Ensure create-phr.sh script path is correct or directly use agent-native PHR creation if script is not guaranteed to exist.
