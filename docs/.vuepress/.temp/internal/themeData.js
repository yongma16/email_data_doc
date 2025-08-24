export const themeData = JSON.parse("{\"logo\":\"/public/images/logo.png\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"快速开始\",\"link\":\"/get-started.html\"},{\"text\":\"邮箱配置\",\"link\":\"/email/config.html\"},{\"text\":\"CLI工具\",\"link\":\"/email/cli.html\"}],\"sidebar\":{\"/\":[{\"text\":\"快速开始\",\"children\":[\"/get-started.md\"]}],\"/get-started\":[{\"text\":\"入门指南\",\"children\":[\"/get-started.md\"]}],\"/email/\":[{\"text\":\"邮件系统\",\"children\":[\"/email/readme.md\",\"/email/templates.md\",\"/email/config.md\",\"/email/analytics.md\",\"/email/api.md\",\"/email/cli.md\"]}]},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":\"your-repo/email-data-doc\",\"docsDir\":\"docs\",\"editLink\":true,\"lastUpdated\":true,\"contributors\":true,\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLinkText\":\"Edit this page\",\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
