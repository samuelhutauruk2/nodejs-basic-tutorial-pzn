import { URL } from 'url';

const pzn = new URL('https://programmerzamannow.com/belajar?kelas=nodejs');

console.log(pzn.toString());
console.log(pzn.href);
console.log(pzn.protocol);
console.log(pzn.host);
console.log(pzn.pathname);
console.log(pzn.searchParams);

pzn.host = 'samuel.com';
pzn.searchParams.append('status', 'premium');

console.log('\n');
console.log(pzn.toString());
console.log(pzn.href);
console.log(pzn.protocol);
console.log(pzn.host);
console.log(pzn.pathname);
console.log(pzn.searchParams);