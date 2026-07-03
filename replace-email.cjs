const fs = require('node:fs');
const path = require('node:path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach((file) => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      filelist.push(dirFile);
    }
  });
  return filelist;
};

const files = walkSync('./src').filter(
  (f) => (f.endsWith('.tsx') ?? f.endsWith('.ts')) ?? f.endsWith('.json'),
);

let replacements = 0;
files.forEach((file) => {
  let content = fs.readFileSync(file, 'utf-8');
  const original = content;
  content = content.replaceAll(/support@Kaiyataxi\.com/g, 'c.contact@kaiya.taxi');
  content = content.replaceAll(/contact@kaiya\.taxi/g, 'c.contact@kaiya.taxi');
  content = content.replaceAll(/info@hokkaidotaxi\.com/g, 'c.contact@kaiya.taxi');
  content = content.replaceAll(/c\.contact@kaiya\.taxi/g, 'c.contact@kaiya.taxi');

  if (original !== content) {
    fs.writeFileSync(file, content, 'utf-8');
    replacements++;
    console.log(`Updated ${file}`);
  }
});
console.log(`Total files updated: ${replacements}`);
