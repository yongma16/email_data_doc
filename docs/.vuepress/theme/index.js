import { defaultTheme } from '@vuepress/theme-default'

export default defaultTheme({
  // 继承默认主题并自定义
  logo: '/images/logo.png',
  navbar: [
    { text: '首页', link: '/' },
    { text: '快速开始', link: '/get-started.html' },
    { text: '邮箱配置', link: '/email/config.html' },
    { text: 'CLI工具', link: '/email/cli.html' },
  ],
  sidebar: {
    '/get-started': [
      {
        text: '入门指南',
        children: [
          '/get-started.md',
        ],
      },
    ],
    '/email/': [
      {
        text: '邮箱配置',
        children: [
          '/email/config.md',
          '/email/cli.md',
        ],
      },
    ],
  },
  // 自定义主题配置
  colorMode: 'auto',
  colorModeSwitch: true,
  repo: 'your-repo/email-data-doc',
  docsDir: 'docs',
  editLink: true,
  lastUpdated: true,
  contributors: true,
})
