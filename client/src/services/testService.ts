import fetch from 'node-fetch';

export class TestService {
    async getTestValue() : Promise<string> {
        const response = await fetch('http://localhost:3000/test');
        const json = await response.json();
        return json.test;
    }

    async getNotes() : Promise<string[]> {
        const response = await fetch('http://localhost:3000/notes');
        return await response.json();
    }

    async addNote(note: string) : Promise<string> {
        const payload = {note};
        const response = await fetch(
            'http://localhost:3000/add-note',
            {method: 'POST', body: JSON.stringify(payload)}
        );
        const json = await response.json();
        return json.text;
    }
}