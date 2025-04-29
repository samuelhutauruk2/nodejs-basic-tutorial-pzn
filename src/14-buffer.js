import { Buffer } from 'node:buffer';

const text = 'Samuel Hutauruk'
const buffer1 = Buffer.from(text);

// Print array of buffer (byte represented) of variable text
console.log(buffer1);

// Print to original string
console.log(buffer1.toString());

// Reverse array of buffer
buffer1.reverse();
console.log(buffer1.toString());