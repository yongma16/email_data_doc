import { CodeTabs } from "G:/front_projects/doc/email_data_doc/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "G:/front_projects/doc/email_data_doc/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "G:/front_projects/doc/email_data_doc/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
