import {BaseModel} from 'db-starter';

export class Note extends BaseModel {
    text: string;

    static get tableName () {
        return 'notes';
    }
}