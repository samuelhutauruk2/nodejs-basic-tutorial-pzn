import http from 'http';
import { Buffer } from 'buffer';

const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);
    // console.log(req.headers);

    const defaultRes = Buffer.from('Greeting from Server');

    if (req.method === 'POST') {

        let responseBody = '';

        res.writeHead(201, {
            'content-type': 'application/json'
        });

        req.on('data', (chunk) => {
            responseBody += chunk;
        });

        req.on('end', () => {
            res.write(responseBody);
            res.end();
        });

        req.on('error', (err) => {
            console.error(`Request error: ${err}`)
            res.statusCode = 400;
            res.end('Error receiving data.');
        });

    } else {
        res.writeHead(200, {
            'content-type': 'text/plain'
        });
        res.write(defaultRes);
        res.end();
    }

});

const port = 8000;
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});