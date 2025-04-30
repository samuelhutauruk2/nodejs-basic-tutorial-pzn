import cluster from 'cluster';
import os from 'os';
import process from 'process';
import http from 'http';

if (cluster.isPrimary) {

    console.log(`Primary: ${process.pid}`);

    os.cpus().forEach(() => {
        cluster.fork();
    });

    cluster.on('exit', (worker) => {
        console.log(`Worker ${worker.id} is exited.`);
        cluster.fork();
    });

    cluster.on('fork', (worker) => {
        console.log(`Worker ${worker.id} forked as ${worker.process.pid}`);
    })
}

if (cluster.isWorker) {

    const server =  http.createServer((req, res) => {
        res.write(`Response from process ${process.pid}`);
        res.end();
        process.exit();
    });

    server.on('listening', () => {
        console.log(`Server started by Worker process ${process.pid}`);
    });

    server.listen(8000);
}
