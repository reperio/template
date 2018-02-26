"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_starter_1 = require("db-starter");
class Note extends db_starter_1.BaseModel {
    static get tableName() {
        return 'notes';
    }
}
exports.Note = Note;
//# sourceMappingURL=note.js.map