import { Console } from 'console';
import fs from 'fs';

const logFile = fs.createWriteStream('app.log');

const log = new Console({
    stdout: logFile,
    stderr: logFile
});

log.info('Hello log');
log.error('Something goes wrong');

const person = {
    firstName: 'Samuel',
    lastName: 'Hutauruk'
};

log.table(person);