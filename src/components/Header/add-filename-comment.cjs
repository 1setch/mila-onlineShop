const fs = require('fs');
const path = require('path');

const TARGET_EXTENSIONS = ['.ts', '.tsx', '.scss'];

function getComment(filename, ext) {
  if (ext === '.scss') {
    return `/* ${filename} */`;
  }
  return `// ${filename}`;
}

function processDirectory(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      processDirectory(fullPath);
      continue;
    }

    const ext = path.extname(entry.name);
    if (!TARGET_EXTENSIONS.includes(ext)) continue;

    const content = fs.readFileSync(fullPath, 'utf8');
    const firstLine = content.split('\n')[0];
    const comment = getComment(entry.name, ext);

    if (firstLine.trim() === comment) continue;

    fs.writeFileSync(fullPath, `${comment}\n${content}`, 'utf8');
    console.log(`✔ Updated: ${fullPath}`);
  }
}

processDirectory(process.cwd());
