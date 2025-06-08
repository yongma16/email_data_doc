import comp from "D:/email_doc/vuepress-doc/docs/.vuepress/.temp/pages/email/cli.html.vue"
const data = JSON.parse("{\"path\":\"/email/cli.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1749180687000,\"contributors\":[{\"name\":\"mayong\",\"username\":\"mayong\",\"email\":\"v_bymyma@tencent.com\",\"commits\":1,\"url\":\"https://github.com/mayong\"}],\"changelog\":[{\"hash\":\"fae70fc0a2414105dfc9fa2b0484e822aac47464\",\"time\":1749180687000,\"email\":\"v_bymyma@tencent.com\",\"author\":\"mayong\",\"message\":\"feat: test\"}]},\"filePathRelative\":\"email/cli.md\"}")
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
