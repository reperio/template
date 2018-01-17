import ReperioServer from './index'

// Run this file to test the server
async function start() {
    const reperio_server = new ReperioServer();

    await reperio_server.startServer(false);
}


start();