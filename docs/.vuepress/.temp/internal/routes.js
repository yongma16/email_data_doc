export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"G:/front_projects/doc/email_data_doc/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"数据来源"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"G:/front_projects/doc/email_data_doc/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/email/cli.html", { loader: () => import(/* webpackChunkName: "email_cli.html" */"G:/front_projects/doc/email_data_doc/docs/.vuepress/.temp/pages/email/cli.html.js"), meta: {"title":""} }],
  ["/email/config.html", { loader: () => import(/* webpackChunkName: "email_config.html" */"G:/front_projects/doc/email_data_doc/docs/.vuepress/.temp/pages/email/config.html.js"), meta: {"title":""} }],
  ["/email/", { loader: () => import(/* webpackChunkName: "email_index.html" */"G:/front_projects/doc/email_data_doc/docs/.vuepress/.temp/pages/email/index.html.js"), meta: {"title":"emailIntroduce.md"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"G:/front_projects/doc/email_data_doc/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
