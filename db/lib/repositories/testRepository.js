"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const note_1 = require("../models/note");
class TestRepository {
    constructor(uow) {
        this.uow = uow;
    }
    async addNote(note) {
        const noteModel = note_1.Note.fromJson({ text: note });
        return await note_1.Note.query(this.uow.transaction).insert(noteModel);
    }
    async getNotes() {
        return await note_1.Note.query(this.uow.transaction);
    }
}
exports.TestRepository = TestRepository;
//# sourceMappingURL=testRepository.js.map