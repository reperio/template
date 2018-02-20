import { BaseModel } from 'db-starter';
export declare class Note extends BaseModel {
    text: string;
    static readonly tableName: string;
}
