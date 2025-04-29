import fs from 'fs/promises';
import { Buffer } from 'buffer';
import zlib from 'zlib';

(async () => {

    const filePath = './file1.txt';
    const compressedFilePath = './file.gzip';

    // Create and write buffer
    const dataBuffer = Buffer.from('Hello NodeJS');
    await fs.writeFile(filePath, dataBuffer);
    console.log('Original file written');

    // Read content as text
    const fileContent = await fs.readFile(filePath, { encoding: 'utf-8'});
    console.log(`File content: ${fileContent}`);

    // Compress and write
    const fileBuffer = await fs.readFile(filePath)
    const compressedBuffer = zlib.gzipSync(fileBuffer);
    await fs.writeFile(compressedFilePath, compressedBuffer);
    console.log('Compressed file written.');

    // Remove original file
    await fs.rm(filePath);
    console.log(`${filePath} removed.`);

    // Decompress and restore 
    const decompressedFileBuffer = zlib.gunzipSync(compressedBuffer);
    await fs.writeFile(filePath, decompressedFileBuffer)
    console.log(`${filePath} restored from gzip.`);

})();