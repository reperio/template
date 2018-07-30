import {Request} from 'hapi';
import {Note} from 'reperio-example-db/lib/models/note';
import {jwt} from 'jsonwebtoken'

const routes = [
    {
        method: 'GET',
        path: '/test',
        handler: async (req: Request, h: any) => {
            return {test: 'This is a test.'};
        }
    },
    {
        method: 'GET',
        path: '/notes',
        handler: async (req: Request, h: any) => {
            try {
                const uow = await req.app.getNewUoW();
                return (await uow.testRepository.getNotes()).map((n: Note) => n.text);
            } catch(e) {
                console.log(e);
                return null;
            }
        }
    },
    {
        method: 'POST',
        path: '/add-note',
        handler: async (req: Request, h: any) => {
            const uow = await req.app.getNewUoW();
            return await uow.testRepository.addNote(req.payload.note);
        }
    },
    {
        method: 'POST',
        path: '/auth',
        handler: async (req: Request, h: any) => {
            const tokenPayload = {
                currentUserId: '1234'
            };
        
            const token = jwt.sign(tokenPayload, '12345', {
                expiresIn: '12h'
            });

            req.app.currentUserId = '1234';
            
            return h.continue;
        }
    },
    {
        method: 'GET',
        path: '/auth',
        handler: async (req: Request, h: any) => {
            return h.response(true);
        }
    }
];

export default routes;