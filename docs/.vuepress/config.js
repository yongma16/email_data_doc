import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
    lang: 'zh-CN',

    title: '邮件模板分析文档',
    description: '邮件模板分析文档',

    theme: defaultTheme({
        logo: 'https://vuejs.press/images/hero.png',
        navbar: [{ text: '开始', link: '/get-started' }, { text: '邮箱', link: '/email/config' }, ],
        // 侧边栏配置
        sidebar: {
            '/get-started': [{
                    text: 'email 介绍',
                    // prefix: 'email/',
                    // collapsible: true,
                    // 基于项目路径的 .md 或 .html 后缀是可以省略的
                    // children: ['cli', 'config'],
                },

            ],
            '/email/': [{
                    text: 'email 介绍',
                    prefix: 'email/',
                    collapsible: true,
                    // 基于项目路径的 .md 或 .html 后缀是可以省略的
                    children: ['cli', 'config'],
                },

            ],
        },
    }),

    bundler: viteBundler(),
})