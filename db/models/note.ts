import {Model} from "objection";

export class Note extends Model {
    text: string;

    static get tableName () {
        return 'notes';
    }
}