// https://nodejs.org/docs/latest-v22.x/api/process.html

import process from 'process';

// The process object is an instance of EventEmitter.

process.addListener('exit', (exitCode) => {
    console.log('Exit with code: ', exitCode);
});

console.log(process.version);
console.table(process.argv);
console.log(process.report);
console.log(process.env);