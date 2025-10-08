import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, '..', 'dist');
const basePath = '/biojet-website';

// Function to recursively find HTML files
function findHtmlFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findHtmlFiles(fullPath));
    } else if (item.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to fix asset paths in HTML content
function fixAssetPaths(content) {
  // Fix absolute asset paths to include base path
  return content
    .replace(/src="\/assets\//g, `src="${basePath}/assets/`)
    .replace(/href="\/assets\//g, `href="${basePath}/assets/`)
    .replace(/url\(\/assets\//g, `url(${basePath}/assets/`);
}

// Main function
function main() {
  console.log('🔧 Fixing asset paths for GitHub Pages...');
  
  const htmlFiles = findHtmlFiles(distDir);
  
  for (const file of htmlFiles) {
    console.log(`📝 Processing: ${path.relative(distDir, file)}`);
    
    let content = fs.readFileSync(file, 'utf8');
    const originalContent = content;
    
    content = fixAssetPaths(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`✅ Fixed asset paths in ${path.relative(distDir, file)}`);
    }
  }
  
  console.log('🎉 Asset path fixing complete!');
}

main();
