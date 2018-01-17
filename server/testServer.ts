import ReperioServer from './index'


async function start() {
    const reperio_server = new ReperioServer();

    await reperio_server.startServer(false);
}


start();