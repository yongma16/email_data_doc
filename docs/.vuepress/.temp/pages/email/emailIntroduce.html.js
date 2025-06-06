import comp from "D:/email_doc/vuepress-doc/docs/.vuepress/.temp/pages/email/emailIntroduce.html.vue"
const data = JSON.parse("{\"path\":\"/email/emailIntroduce.html\",\"title\":\"emailIntroduce.md\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"email/emailIntroduce.md\"}")
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
