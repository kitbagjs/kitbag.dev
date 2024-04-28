import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kitbag",
  description: "Purr-fect Typescript Tools",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    logo: '/kitbag-logo-circle.svg',
    siteTitle: 'Kitbag',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/kitbagjs' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
  }
})
