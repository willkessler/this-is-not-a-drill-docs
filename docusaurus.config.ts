import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'This Is Not A Drill! Docs',
  tagline: 'The easiest alerting system on the planet!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://this-is-not-a-drill.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'willkessler', // Usually your GitHub org/user name.
  projectName: 'this-is-not-a-drill-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/ThisIsNotADrill_cutout.png',
    navbar: {
      title: 'This Is Not A Drill! Docs',
      logo: {
        alt: 'TINAD logo',
        src: 'img/ThisIsNotADrill_cutout.png',
      },
      items: [
        {
          href: 'https://app.this-is-not-a-drill.com',
          label: 'Main App',
          position: 'right',
        },
        {
          href: 'https://github.com/willkessler/this-is-not-a-drill',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} This Is Not A Drill!. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
