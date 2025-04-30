import {threadId, Worker} from 'worker_threads';

const worker1 = new Worker('./src/25-worker.js');
const worker2 = new Worker('./src/25-worker.js');

worker1.on('message', (message) => {
    console.log(`Main thread received from worker1: ${message}`);
});

worker2.on('message', (message) => {
    console.log(`Main thread received from worker2: ${message}`);
});

worker1.postMessage(10);
worker2.postMessage(10);