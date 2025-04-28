import dns from 'dns/promises';

const hostname = 'www.pthbs.com';
const ip = await dns.lookup(hostname);

console.log(ip.address);
console.log(ip.family);