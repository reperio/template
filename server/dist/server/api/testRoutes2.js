"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes = [
    {
        method: 'GET',
        path: '/test3',
        handler: async (req, h) => {
            return { test: 'This is in a different file.' };
        }
    }
];
exports.default = routes;
//# sourceMappingURL=testRoutes2.js.map