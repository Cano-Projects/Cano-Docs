import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Cano Suite Docs',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'warn',
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Cano Suite Docs',
      logo: {
        alt: 'Cano Suite Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'cano',
          position: 'left',
          label: 'Cano',
        },
        {
          type: 'doc',
          docId: 'canoon',
          position: 'left',
          label: 'Canoon',
        },
        {
          type: 'doc',
          docId: 'canoscript',
          position: 'left',
          label: 'Canoscript',
        },
        {
          type: 'doc',
          docId: 'canoutils',
          position: 'left',
          label: 'Canoutils',
        },
        {
          type: 'doc',
          docId: 'canosh',
          position: 'left',
          label: 'Canosh',
        },
        {
          type: 'doc',
          docId: 'canoos',
          position: 'left',
          label: 'CanoOS',
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
              label: 'Cano',
              to: '/docs/cano',
            },
            {
              label: 'Canoutils',
              to: '/docs/canoutils',
            },
            {
              label: 'Canoscript',
              to: '/docs/canoscript',
            },
            {
              label: 'Canosh',
              to: '/docs/canosh',
            },
            {
              label: 'Canoon',
              to: '/docs/canoon',
            },
            {
              label: 'CanoOS',
              to: '/docs/canoos',
            }
          ],
        },
        {
          title: 'Community',
          items: [
         
            {
              label: 'Discord',
              href: 'https://discord.gg/qhMDrkGAdx',
            },
          
          
              
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Cano Project.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
