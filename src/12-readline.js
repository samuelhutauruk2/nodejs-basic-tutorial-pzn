import readline from 'readline';
import process from 'process';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question('Type your name: ', (name) => {
//     console.log(`Hello ${name}, how there?`);
//     rl.close();
// });


rl.question('operand1: ', a => {
    rl.question('operand2: ', b => {
        console.log(`${a} * ${b} = ${a*b}`);
        rl.close();
    });
});