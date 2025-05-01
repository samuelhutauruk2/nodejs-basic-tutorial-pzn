import timer from 'timers/promises';

console.log(new Date());
const value = await timer.setTimeout(5000, 'Hello from Timer');
console.log(new Date());
console.log(value);

for await (const data of timer.setInterval(1000, 'Hello again')) {
    console.log(`Start time at ${new Date()}: ${data}`);
}