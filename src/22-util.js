import util from 'util';

const firstName = 'samuel';
const lastName = 'hutauruk';

console.log(`Hello ${firstName} ${lastName}`);
console.log(util.format('Hello %s %s', firstName, lastName));

const person = {
    firstName : 'samuel',
    lastName : 'hutauruk'
};

console.log('Person: ', JSON.stringify(person));
console.log(util.format('Person: %j',person));