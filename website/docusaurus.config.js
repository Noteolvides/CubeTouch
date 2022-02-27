// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CubeTouch',
  tagline: 'A easy and fun HID device',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: "/CubeTouch/",
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Noteolvides', // Usually your GitHub org/user name.
  projectName: 'CubeTouch', // Usually your repo name.
  trailingSlash: true,



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
            href: 'https://github.com/noteolvides/touchCube',
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
                label: 'How to Build',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Social Links',
            items: [
              {
                label: 'Instagram',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Linkedin',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'Buy a CubeTouch',
            items: [
              {
                label: 'Tindie',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
            ],
          },
        ],
        copyright: `CubeTouch-Docs. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
