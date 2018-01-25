import {Note} from '../models/note';

export class TestRepository {
    async addNote(note: string) : Promise<Note> {
        return await Note.query().insert({text: note});
    }

    async getNotes() : Promise<Note[]> {
        return await Note.query();
    }
}