import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

import { getChildren } from "vuepress-sidebar-atuo";

const sidebarEmail = require("../../utils/sidebarAuto.js");

const sidebarGetStarted = sidebarEmail("docs/email");
console.log("sidebarGetStarted", sidebarGetStarted);

export default defineUserConfig({
    lang: "zh-CN",

    title: "邮件模板分析文档",
    description: "邮件模板分析文档",

    theme: defaultTheme({
        logo: "https://vuejs.press/images/hero.png",
        navbar: [
            { text: "开始", link: "/get-started" },
            { text: "邮箱", link: "/email/config" },
        ],
        // 侧边栏配置
        sidebar: {
            "/get-started": [{
                text: "email 介绍",
                // prefix: 'email/',
                // collapsible: true,
                // 基于项目路径的 .md 或 .html 后缀是可以省略的
                // children: ['cli', 'config'],
            }, ],
            "/email/": [{
                title: "邮件文档",
                collapsable: true,
                children: getChildren("./docs/email"),
                // 自动读取email目录
            }, ],
        },
    }),

    bundler: viteBundler(),
});