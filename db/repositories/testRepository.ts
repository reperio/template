import {Note} from '../models/note';
import {UnitOfWork} from "../index";

export class TestRepository {
    uow: UnitOfWork;

    constructor(uow: UnitOfWork) {
        this.uow = uow;
    }

    async addNote(note: any) : Promise<Note> {
        const noteModel = Note.fromJson({text: note});
        return await Note.query(this.uow.transaction).insert(noteModel);
    }

    async getNotes() : Promise<Note[]> {
        return await Note.query(this.uow.transaction);
    }
}