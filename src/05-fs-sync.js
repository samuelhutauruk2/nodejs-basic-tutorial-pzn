import fs from 'fs';

// Write file
const filePath = './temp.txt';
fs.writeFileSync(filePath, 'Hello World!');

// Read file
const buffer = fs.readFileSync(filePath);
console.log(buffer.toString());

// Remove file
fs.rmSync(filePath);

if (!fs.existsSync(filePath)) {
    console.log('File removed.');
};