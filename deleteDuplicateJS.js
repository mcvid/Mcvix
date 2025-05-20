const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const directoryPath = __dirname;

function getFileHash(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  const hashSum = crypto.createHash('sha256');
  hashSum.update(fileBuffer);
  return hashSum.digest('hex');
}

function deleteDuplicateJSFiles() {
  const files = fs.readdirSync(directoryPath);
  const jsFiles = files.filter(file => path.extname(file) === '.js');

  console.log('JavaScript files found:', jsFiles);

  const hashMap = new Map();

  jsFiles.forEach(file => {
    const fullPath = path.join(directoryPath, file);
    const fileHash = getFileHash(fullPath);

    console.log(`File: ${file}, Hash: ${fileHash}`);

    if (hashMap.has(fileHash)) {
      // Duplicate found, delete this file
      try {
        fs.unlinkSync(fullPath);
        console.log(`Deleted duplicate file: ${file}`);
      } catch (err) {
        console.error(`Error deleting file ${file}:`, err);
      }
    } else {
      hashMap.set(fileHash, file);
    }
  });

  console.log('Duplicate deletion process completed.');
}

deleteDuplicateJSFiles();
