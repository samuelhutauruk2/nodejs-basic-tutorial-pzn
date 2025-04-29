import net from 'net';
import timer from 'timers';
import process from 'process';

const connection = net.createConnection({ 
    port: 3000, 
    host: 'localhost' 
});

connection.on('data', data => {
    console.log(`Received data from server: ${data.toString()}`);
});

const name = process.argv[2] || 'Anonymous';
timer.setInterval(() => {
    const payload = {
        name: name,
        timestamp: new Date().toISOString()
    };

    const message = JSON.stringify(payload);
    connection.write(message + '\n');
}, 1000);

