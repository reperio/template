import { Note } from '../models/note';
import { UnitOfWork } from "../unitOfWork";
export declare class TestRepository {
    uow: UnitOfWork;
    constructor(uow: UnitOfWork);
    addNote(note: any): Promise<Note>;
    getNotes(): Promise<Note[]>;
}
