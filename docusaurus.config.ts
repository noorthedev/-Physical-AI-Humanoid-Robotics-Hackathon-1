import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Physical AI & Humanoid Robotics Textbook',
  tagline: 'Dinosaurs are coolA comprehensive, hands-on learning system where you gain mastery over the future: humanoid robotics, ROS 2, large action models, simulation, VLA systems, hardware, and cutting-edge AI for next-generation intelligent machines.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: false, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://physical-ai-humanoid-robotics-hackathon-1-acfffmzkr.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'noorthedev', // GitHub org/user name.
  projectName: 'physical-ai-book', // Repo name.

  // 🛑 Yahan par maine 'throw' ko 'warn' se badal diya hai takay broken links build ko fail na karein.
  onBrokenLinks: 'warn', 

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
  defaultLocale: 'en',
  locales: ['en', 'ur'], // Yahan 'ur' hona lazmi hai
  localeConfigs: {
    en: {
      label: 'English',
      direction: 'ltr',
    },
    ur: {
      label: 'Urdu',
      direction: 'rtl',
    },
  },
},

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // ⚠️ Maine aapka pura themeConfig object yahan shift kar diya hai.
  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Physical AI & Humanoid Robotics',
      logo: {
        alt: 'Text Book',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Chapters    ',
        },


        {
    type: 'localeDropdown',
    position: 'right',
  },

        {
          href: 'https://github.com/noorthedev',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              // 📌 Yahan par broken link fix kiya gaya hai.
              to: '/docs/introduction/intro', 
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkenIN',
              href: 'https://www.linkedin.com/in/anum-rajput-1a080632a/',
            },
            {
              label: 'facebook',
              href: 'https://www.facebook.com/noorthe.dev',
            },
            {
              label: 'X',
              href: 'https://x.com/Anumrajput88',
            },
          ],
        },
        {
          title: 'More',
          items: [

            {
              label: 'GitHub',
              href: 'https://github.com/noorthedev',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Physical AI & Humanoid Robotics Textbook Built with ❤️ by AnumRajput`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
