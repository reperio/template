const routes = [
    {
        method: 'GET',
        path: '/test3',
        handler: async (req, h) => {
            return {test: 'This is in a different file.'};
        }
    }
];

export default routes;