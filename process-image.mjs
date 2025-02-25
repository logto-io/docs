/* eslint-disable no-await-in-loop */
// Optimize-images.mjs
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// ========================
// 配置区（按需修改）
// ========================
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const TARGET_DIRS = [
  // 需要处理的目录
  path.join(__dirname, 'docs'),
  // Path.join(__dirname, 'src'),
];

const IMAGE_BASE_PATH = '/staticLocalized/en/img/assets'; // 图片最终存放路径

// ========================
// 核心工具函数
// ========================
const processFiles = async () => {
  for (const dir of TARGET_DIRS) {
    if (await directoryExists(dir)) {
      await processDirectory(dir);
    }
  }
};

const directoryExists = async (path) => {
  try {
    const file = await fs.stat(path);
    return file.isDirectory();
  } catch {
    return false;
  }
};

const processDirectory = async (directory) => {
  const entries = await fs.readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (path.extname(entry.name) === '.mdx') {
      await processMdxFile(fullPath);
    }
  }
};

const processMdxFile = async (filePath) => {
  // eslint-disable-next-line @silverhand/fp/no-let
  let content = await fs.readFile(filePath, 'utf8');
  const imageImports = new Map();

  // 匹配并删除图片 import 语句
  // eslint-disable-next-line @silverhand/fp/no-mutation
  content = content.replaceAll(
    /import (\w+) from ["'](@site\/.*?\.(png|jpg|jpeg))["'];?\n/g,
    (_, varName, importPath) => {
      const fileName = path.basename(importPath);
      imageImports.set(varName, fileName);
      return '';
    }
  );

  // 替换图片引用
  for (const [varName, fileName] of imageImports) {
    const regex = new RegExp(`<img\\s+([^>]*?)src\\s*=\\s*{${varName}}(\\s*[^>]*?)\\/?>`, 'gi');
    // eslint-disable-next-line @silverhand/fp/no-mutation
    content = content.replace(regex, `<img $1src="${IMAGE_BASE_PATH}/${fileName}"$2/>`);
  }

  await fs.writeFile(filePath, content);
  console.log(`✅ Processed: ${path.relative(__dirname, filePath)}`);
};

// ========================
// 执行入口
// ========================
try {
  await processFiles();
  console.log('🎉 图片优化完成！');
} catch (error) {
  console.error('❌ 处理失败:', error);
  // eslint-disable-next-line unicorn/no-process-exit
  process.exit(1);
}
/* eslint-enable no-await-in-loop */
