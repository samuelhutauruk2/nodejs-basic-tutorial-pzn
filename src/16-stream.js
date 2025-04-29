import fs from 'node:fs';

// Create a writeable stream
const writer = fs.createWriteStream('file.log', { encoding: 'utf-8' });
writer.write('samuel\n');
writer.write('hutauruk\n');
writer.end();

// Create a readable stream
const reader = fs.createReadStream('file.log');
reader.on('data', chunk => { console.log(chunk.toString()); });