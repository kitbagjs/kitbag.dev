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
      {
        text: 'About',
        items: [
          { text: 'Code of Conduct', link: 'https://github.com/kitbagjs/router?tab=coc-ov-file' }
        ]
      },
      { text: 'Discord', link: 'https://discord.gg/UT7JrAxU' },
      { text: 'GitHub', link: 'https://github.com/kitbagjs' }
    ],

    footer: {
      message: '<a href="https://www.netlify.com"> <img src="https://www.netlify.com/v3/img/components/netlify-color-accent.svg" alt="Deploys by Netlify" /> </a>'
    }
  }
})
