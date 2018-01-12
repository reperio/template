"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes = [
    {
        method: 'GET',
        path: '/test3',
        handler: (req, h) => {
            return 'This is in a different file.';
        }
    }
];
exports.default = routes;
//# sourceMappingURL=testRoutes2.js.map