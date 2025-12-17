import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Manual sidebar configuration for the Physical AI & Humanoid Robotics textbook
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['introduction/intro'],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'ROS 2 Core Principles',
      items: [
        'ROS 2 Core Principles/module-1-ros2',
        'ROS 2 Core Principles/ros2-hands-on'
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Robot Simulation Frameworks',
      items: [
        'Robot Simulation Frameworks/module-2-simulation',
        'Robot Simulation Frameworks/digital-twins',
        'Robot Simulation Frameworks/gazebo-unity'
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Fundamentals of Robotics Hardware',
      items: ['Fundamentals of Robotics Hardware/module-3-hardware'],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Vision-Language-Action Systems',
      items: [
        'Vision-Language-Action Systems/module-4-vla-foundations',
        'Vision-Language-Action Systems/vla-vision',
        'Vision-Language-Action Systems/vla-language',
        'Vision-Language-Action Systems/vla-action',
        'Vision-Language-Action Systems/vla-hands-on-basic'
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Advanced AI Control Mechanisms',
      items: ['Advanced AI Control Mechanisms/module-5-advanced-ai'],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Humanoid Robotics Engineering',
      items: ['Humanoid Robotics Engineering/module-6-humanoid-design'],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Appendix & Supporting Resources',
      items: [
        'Appendix & Supporting Resources/glossary',
        'Appendix & Supporting Resources/references',
        'Appendix & Supporting Resources/resources'
      ],
      collapsed: true,
    },
  ],
};

export default sidebars;
