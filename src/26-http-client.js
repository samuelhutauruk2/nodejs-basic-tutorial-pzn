import https from 'https';

const endpoint = 'https://requestbin.whapi.cloud/1bm1se41';
let responseBody = '';

const request = https.request(endpoint, {

    method: 'POST',
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
    }

}, (response) => {

    console.log('statusCode: ', response.statusCode);
    console.log('headers: ', response.headers);

    // Use 'data' event to accumulate each chunck of data buffer 
    // The data you're receiving is streamed over a TCP connection 
    // Each chunk triggers the 'data' callback.
    response.on('data', (chunk) => {
        responseBody += chunk;
    });

    // Once all chunks are received, Node emits the 'end' event so you can finalize your logic (like parsing or displaying).
    // Use 'end' event to safely process the whole result
    response.on('end', () => {
        console.log(`Received data ${responseBody.toString()}`);
    })
});

request.on('error', (err) => {
    console.error(err);
});

const body = JSON.stringify({
    firstName: 'samuel',
    lastName: 'hutauruk'
});

request.write(body);
request.end();