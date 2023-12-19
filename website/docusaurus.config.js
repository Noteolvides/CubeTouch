// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CubeTouch',
  tagline: 'A easy and fun HID device',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: "/",
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Noteolvides', // Usually your GitHub org/user name.
  projectName: 'CubeTouch', // Usually your repo name.
  trailingSlash: true,
  themes: [
    '@saucelabs/theme-github-codeblock'
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'CubeTouch',
        logo: {
          alt: 'Logo',
          src: 'img/logo_light.svg',
          srcDark: 'img/logo_dark.svg'
        },
        items: [
          {
            position: 'left',
            label: 'First steps',
            to: '/docs/intro'
          },
          {
            position: 'left',
            label: 'Examples',
            to: '/docs/firstSteps/examples'
          },
          {
            position: 'left',
            label: 'Key Remapping',
            href: '/keyRemapping'
          },
          {
            position: 'left',
            label: 'Manual',
            to: '/manual'
          },
          {
            href: 'https://github.com/noteolvides/cubetouch',
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
                label: 'How to reprogram',
                to: '/docs/intro',
              },
              {
                label: 'Build manual',
                to: '/manual',
              },
              {
                label: 'Build video',
                href: 'https://youtu.be/8IG3UgNzkUI',
              },
            ],
          },
          {
            title: 'Social Links',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/noteolvid.es/',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCDMxDueAs81GeD3XXMcCJtw',
              },
              {
                label: 'Hackaday',
                href: 'https://hackaday.io/noteolvid.es',
              },
            ],
          },
          {
            title: 'Buy a CubeTouch',
            items: [
              {
                label: 'Tindie',
                href: 'https://www.tindie.com/products/26778/',
              },
            ],
          },
        ],
        copyright: `CubeTouch-Docs. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['cpp'],
      },
      colorMode: {
        defaultMode: 'dark',
      }
    }),
};

module.exports = config;
