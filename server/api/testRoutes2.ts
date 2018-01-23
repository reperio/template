const routes = [
    {
        method: 'GET',
        path: '/test3',
        handler: (req, h) => {
            return {test: 'This is in a different file.'};
        }
    }
];

export default routes;