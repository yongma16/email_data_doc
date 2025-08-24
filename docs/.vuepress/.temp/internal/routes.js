export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"G:/front_projects/doc/email_data_doc/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"数据来源"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"G:/front_projects/doc/email_data_doc/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"邮件模板分析文档"} }],
  ["/email/analytics.html", { loader: () => import(/* webpackChunkName: "email_analytics.html" */"G:/front_projects/doc/email_data_doc/docs/.vuepress/.temp/pages/email/analytics.html.js"), meta: {"title":"数据分析"} }],
  ["/email/api.html", { loader: () => import(/* webpackChunkName: "email_api.html" */"G:/front_projects/doc/email_data_doc/docs/.vuepress/.temp/pages/email/api.html.js"), meta: {"title":"API 文档"} }],
  ["/email/cli.html", { loader: () => import(/* webpackChunkName: "email_cli.html" */"G:/front_projects/doc/email_data_doc/docs/.vuepress/.temp/pages/email/cli.html.js"), meta: {"title":"CLI工具"} }],
  ["/email/config.html", { loader: () => import(/* webpackChunkName: "email_config.html" */"G:/front_projects/doc/email_data_doc/docs/.vuepress/.temp/pages/email/config.html.js"), meta: {"title":"邮箱配置"} }],
  ["/email/", { loader: () => import(/* webpackChunkName: "email_index.html" */"G:/front_projects/doc/email_data_doc/docs/.vuepress/.temp/pages/email/index.html.js"), meta: {"title":"邮件系统介绍"} }],
  ["/email/templates.html", { loader: () => import(/* webpackChunkName: "email_templates.html" */"G:/front_projects/doc/email_data_doc/docs/.vuepress/.temp/pages/email/templates.html.js"), meta: {"title":"模板管理"} }],
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
