import comp from "D:/email_doc/vuepress-doc/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"数据来源\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"获取html内容\",\"slug\":\"获取html内容\",\"link\":\"#获取html内容\",\"children\":[]},{\"level\":2,\"title\":\"渲染\",\"slug\":\"渲染\",\"link\":\"#渲染\",\"children\":[]}],\"git\":{\"updatedTime\":1749175090000,\"contributors\":[{\"name\":\"mayong\",\"username\":\"mayong\",\"email\":\"v_bymyma@tencent.com\",\"commits\":1,\"url\":\"https://github.com/mayong\"}],\"changelog\":[{\"hash\":\"ea6f01a3ee8ac65de6f2d2cfc9545a05a4341891\",\"time\":1749175090000,\"email\":\"v_bymyma@tencent.com\",\"author\":\"mayong\",\"message\":\"feat:init commit\"}]},\"filePathRelative\":\"get-started.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
