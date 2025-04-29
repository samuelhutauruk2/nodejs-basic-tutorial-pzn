import { Buffer } from 'node:buffer';

 const buf1 = Buffer.from('Samuel Hutauruk', 'utf-8');
 console.log(buf1.toString());
 console.log(buf1.toString('hex'));
 console.log(buf1.toString('base64'));

 const bufBase64 = Buffer.from('U2FtdWVsIEh1dGF1cnVr', 'base64');
 console.log(bufBase64.toString('utf-8'));