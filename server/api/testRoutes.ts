const routes = [
    {
        method: 'GET',
        path: '/test',
        handler: async (req, h) => {
            return {test: 'This is a test.'};
        }
    },
    {
        method: 'GET',
        path: '/notes',
        handler: async (req, h) => {
            const testRepository = req.server.app.db.testRepository();
            return (await testRepository.getNotes()).map(n => n.text);
        }
    },
    {
        method: 'POST',
        path: '/add-note',
        handler: async (req, h) => {
            const testRepository = req.server.app.db.testRepository();
            return await testRepository.addNote(req.payload.note);
        }
    }
];

export default routes;