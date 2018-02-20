import { Request } from 'hapi';
declare const routes: {
    method: string;
    path: string;
    handler: (req: Request, h: any) => Promise<any>;
}[];
export default routes;
