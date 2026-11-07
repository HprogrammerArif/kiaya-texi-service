const fs = require('node:fs');
const path = require('node:path');

/**
 * Recursively collects file paths under a directory.
 * @param {string} dir - Directory path
 * @returns {string[]} Collected file paths
 */
const walkSync = (dir) => {
  /** @type {string[]} */
  const collected = [];
  for (const file of fs.readdirSync(dir)) {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      collected.push(...walkSync(dirFile));
    } else {
      collected.push(dirFile);
    }
  }
  return collected;
};

const files = walkSync('./src').filter(
  (f) => f.endsWith('.tsx') || f.endsWith('.ts') || f.endsWith('.json'),
);

let replacements = 0;
for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  const original = content;
  content = content.replaceAll('support@Kaiyataxi.com', 'c.contact@kaiya.taxi');
  content = content.replaceAll('contact@kaiya.taxi', 'c.contact@kaiya.taxi');
  content = content.replaceAll('info@hokkaidotaxi.com', 'c.contact@kaiya.taxi');
  content = content.replaceAll('c.contact@kaiya.taxi', 'c.contact@kaiya.taxi');

  if (original !== content) {
    fs.writeFileSync(file, content, 'utf-8');
    replacements += 1;
  }
}
