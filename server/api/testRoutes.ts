const routes = [
    {
        method: 'GET',
        path: '/test',
        handler: (req, h) => {
            return 'This is a test.';
        }
    },
    {
        method: 'GET',
        path: '/test2',
        handler: (req, h) => {
            return 'This is another test.';
        }
    }
];

export default routes;