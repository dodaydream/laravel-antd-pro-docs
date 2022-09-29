const { description } = require('../../package')
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: 'Laravel Antd Pro',
  description: description,
  base: '/laravel-antd-pro-docs/',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  theme: defaultTheme({
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    navbar: [
      {
        text: '指南',
        link: '/guide',
      },
      {
        text: '參考',
        link: '/reference/use-table.html'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/dodaydream/laravel-antd-pro'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: '指南',
          collapsable: false,
          children: [
            '/guide/readme.md',
            '/guide/installation.md',
            '/guide/quick-start.md',
            '/guide/structure.md',
            '/guide/whats-inside.md',
            '/guide/authentication.md',
            '/guide/authorization.md'
          ]
        }
      ],
      '/reference/': [
        {
          title: '參考',
          collapsable: false,
          children: [
            '/reference/use-table.md',
            '/reference/use-form.md',
            '/reference/crud-table.md',
          ]
        }
      ]
    }
  }),

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
})
