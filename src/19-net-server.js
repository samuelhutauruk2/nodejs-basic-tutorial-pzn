import net from 'net';

// Create TCP Server
const server = net.createServer((client) => {
    console.log('Client connected.');

    // When data is received from the client, it logs the message and replies with a friendly message
    client.on('data', (data) => {
        try {
            const parsed = JSON.parse(data.toString());
            console.log(`Received JSON: ${parsed}`);

            // Respond back to client
            client.write(JSON.stringify({ message: `Hello, ${parsed.name}`}) + '\n');
        } catch (err) {
            console.error(`Invalid JSON: ${err.message}`);
        }
    });

    // Detect when client disconnects
    client.on('end', () => {
        console.log('Client disconnected.');
    });

    // Log errors if something goes wrong
    client.on('error', (err) => {
        console.log(`Client error: ${err.message}`);
    });
});

// Listen for client connections
const port = 3000;
server.listen(port, 'localhost', () => {
    console.log(`Server is running on port ${port}`);
});