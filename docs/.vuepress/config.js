import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '邮件模板分析文档',
    description: '专业的邮件模板分析与管理系统',

    // 使用默认主题并自定义
    theme: defaultTheme({
        logo: '/public/images/logo.png',
        navbar: [
            { text: '首页', link: '/' },
            { text: '快速开始', link: '/get-started.html' },
            { text: '邮箱配置', link: '/email/config.html' },
            { text: 'CLI工具', link: '/email/cli.html' },
        ],
        sidebar: {
            '/': [
                {
                    text: '快速开始',
                    children: [
                        '/get-started.md',
                    ],
                },
            ],
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
                    text: '邮件系统',
                    children: [
                        '/email/readme.md',
                        '/email/templates.md',
                        '/email/config.md',
                        '/email/analytics.md',
                        '/email/api.md',
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
    }),

    // 插件配置
    plugins: [
        // 可以在这里添加插件
    ],

    // 头部配置
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'keywords', content: '邮件模板,邮件分析,邮件管理' }],
        ['meta', { name: 'description', content: '专业的邮件模板分析与管理系统' }],
    ],

    // 站点配置
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '邮件模板分析文档',
            description: '专业的邮件模板分析与管理系统',
        },
    },

    bundler: viteBundler({
        viteOptions: {
            // Vite 配置
        },
        vuePluginOptions: {
            // Vue 插件配置
        },
    }),

    // 开发服务器配置
    host: 'localhost',
    port: 8080,
    open: true,
})