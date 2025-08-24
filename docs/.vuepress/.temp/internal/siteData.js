export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"邮件模板分析文档\",\"description\":\"专业的邮件模板分析与管理系统\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/favicon.ico\"}],[\"meta\",{\"name\":\"keywords\",\"content\":\"邮件模板,邮件分析,邮件管理\"}],[\"meta\",{\"name\":\"description\",\"content\":\"专业的邮件模板分析与管理系统\"}]],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"邮件模板分析文档\",\"description\":\"专业的邮件模板分析与管理系统\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
