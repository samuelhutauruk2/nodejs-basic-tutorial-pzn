import fs from 'fs/promises';

// Write file
const filePath = './temp.txt';
await fs.writeFile(filePath, 'Hello World');

// Read file
const text = await fs.readFile(filePath, {encoding: 'utf-8'});
console.log(text);

// Remove file
await fs.rm(filePath);

try {
    const fileStat = await fs.stat(filePath);
    console.log(fileStat.isFile());
} catch (err) {
    console.log('File removed.');
}