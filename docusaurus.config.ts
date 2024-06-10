import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'This Is Not A Drill! (TINAD) Docs',
  tagline: 'The easiest alerting system on the planet!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.this-is-not-a-drill.com',
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
    algolia: {
      // The application ID provided by Algolia
      appId: 'CLP7YG1NQE',

      // Public API key: it is safe to commit it
      //apiKey: '8d930ed1b831ec1261f27d980a27c271',
      apiKey: '6a796a6280c25729bd60e33f7d9179dc',

      indexName: 'this-is-not-a-drill',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and
      // we want to navigate with window.location.href to them.
      // externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using
      // the same search index for multiple deployments using a different baseUrl. 
      // You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      //replaceSearchResultPathname: {
      //  from: '/docs/', // or as RegExp: /\/docs\//
      //  to: '/',
      // },

      // Optional: Algolia search parameters
      // searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,
    },
    // Replace with your project's social card
    image: 'img/ThisIsNotADrill_cutout.png',
    navbar: {
      title: 'This Is Not A Drill! (TINAD) Docs',
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
