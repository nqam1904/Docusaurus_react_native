// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
   title: "RN Mobile",
   tagline: "Code xịn hơn mỗi ngày, học một lần, code mọi nơi",
   url: "https://your-docusaurus-test-site.com",
   baseUrl: "/",
   onBrokenLinks: "throw",
   onBrokenMarkdownLinks: "warn",
   favicon: "img/favicon.ico",
   organizationName: "facebook", // Usually your GitHub org/user name.
   projectName: "docusaurus", // Usually your repo name.

   presets: [
      [
         "@docusaurus/preset-classic",
         /** @type {import('@docusaurus/preset-classic').Options} */
         ({
            docs: {
               sidebarPath: require.resolve("./sidebars.js"),
               // Please change this to your repo.
               editUrl:
                  "https://github.com/facebook/docusaurus/edit/main/website/",
            },
            blog: {
               showReadingTime: true,
               // Please change this to your repo.
               editUrl:
                  "https://github.com/facebook/docusaurus/edit/main/website/blog/",
            },
            theme: {
               customCss: require.resolve("./src/css/custom.css"),
            },
         }),
      ],
   ],

   themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
         navbar: {
            title: "RN MOBILE",
            logo: {
               alt: "My Site Logo",
               src: "img/logo.svg",
            },
            items: [
               {
                  type: "doc",
                  docId: "intro",
                  position: "left",
                  label: "Docs",
               },
               { to: "/blog", label: "Blog", position: "left" },
            ],
         },
         footer: {
            style: "dark",
            links: [
               {
                  title: "Docs",
                  items: [
                     {
                        label: "Tutorial",
                        to: "/docs/intro",
                     },
                     // {
                     //    label: "Components",
                     //    to: "/components/intro",
                     // },
                  ],
               },
               {
                  title: "Kết nối",
                  items: [
                     {
                        label: "Facebook cá nhân",
                        href: "https://www.facebook.com/quocminh1904/",
                     },
                     {
                        label: "Discord",
                        href: "https://discord.gg/bchYjuhz",
                     },
                  ],
               },
               {
                  title: "More",
                  items: [
                     {
                        label: "Blog",
                        to: "/blog",
                     },
                     {
                        label: "GitHub",
                        href: "https://github.com/nqam1904",
                     },
                  ],
               },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} RN Mobile. Built with Docusaurus.`,
         },
         prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
         },
      }),
};

module.exports = config;
