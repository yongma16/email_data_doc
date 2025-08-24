import "G:/front_projects/doc/email_data_doc/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "G:/front_projects/doc/email_data_doc/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "G:/front_projects/doc/email_data_doc/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "G:/front_projects/doc/email_data_doc/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "G:/front_projects/doc/email_data_doc/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "G:/front_projects/doc/email_data_doc/node_modules/@vuepress/highlighter-helper/lib/client/index.js"
import "G:/front_projects/doc/email_data_doc/node_modules/@vuepress/highlighter-helper/lib/client/styles/code-block-title.css"

export default {
  setup() {
    setupCollapsedLines()
  }
}
