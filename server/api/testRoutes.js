"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = routes;
//# sourceMappingURL=testRoutes.js.map