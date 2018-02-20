"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes = [
    {
        method: 'GET',
        path: '/test',
        handler: async (req, h) => {
            return { test: 'This is a test.' };
        }
    },
    {
        method: 'GET',
        path: '/notes',
        handler: async (req, h) => {
            try {
                const uow = await req.app.getNewUoW();
                return (await uow.testRepository.getNotes()).map((n) => n.text);
            }
            catch (e) {
                console.log(e);
                return null;
            }
        }
    },
    {
        method: 'POST',
        path: '/add-note',
        handler: async (req, h) => {
            const uow = await req.app.getNewUoW();
            return await uow.testRepository.addNote(req.payload.note);
        }
    }
];
exports.default = routes;
//# sourceMappingURL=testRoutes.js.map