import comp from "G:/front_projects/doc/email_data_doc/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"数据来源\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"获取html内容\",\"slug\":\"获取html内容\",\"link\":\"#获取html内容\",\"children\":[]},{\"level\":2,\"title\":\"渲染\",\"slug\":\"渲染\",\"link\":\"#渲染\",\"children\":[]}],\"git\":{\"updatedTime\":1749180687000,\"contributors\":[{\"name\":\"mayong\",\"username\":\"mayong\",\"email\":\"v_bymyma@tencent.com\",\"commits\":2,\"url\":\"https://github.com/mayong\"}],\"changelog\":[{\"hash\":\"fae70fc0a2414105dfc9fa2b0484e822aac47464\",\"time\":1749180687000,\"email\":\"v_bymyma@tencent.com\",\"author\":\"mayong\",\"message\":\"feat: test\"},{\"hash\":\"ea6f01a3ee8ac65de6f2d2cfc9545a05a4341891\",\"time\":1749175090000,\"email\":\"v_bymyma@tencent.com\",\"author\":\"mayong\",\"message\":\"feat:init commit\"}]},\"filePathRelative\":\"get-started.md\"}")
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
