// const fs = require("fs");
// const path = require("path");

// ESM 文件中直接导入内置模块
import fs from 'fs';
// ESM 文件中直接导入内置模块
import path from 'path';

function writeJson(data) {
    console.log("开始写入 JSON 文件...", data);
    // 2. 转换为格式化 JSON 字符串
    const jsonString = JSON.stringify(data, null, 2); // 第三个参数 2 表示缩进空格数
    // 3. 异步写入文件
    fs.writeFile("./json/data.json", jsonString, "utf8", (err) => {
        if (err) {
            console.error("写入失败:", err);
            return;
        }
        console.log("JSON 文件已保存！");
    });
}

function generateSidebar(folderPath) {
    const fullPath = path.join(__dirname, "../", folderPath);
    try {
        const files = fs.readdirSync(fullPath);
        const dataArr = files
            .filter((file) => file.endsWith(".md") && file !== "README.md")
            .map((file) => `/${folderPath}/${file.replace(".md", "")}`);
        writeJson(dataArr);
        return dataArr;
    } catch (error) {
        console.error(`读取目录失败：${fullPath}`, error);
        return [];
    }
}

module.exports = generateSidebar;