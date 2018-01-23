import fetch from 'node-fetch';

export class TestService {
    async getTestValue() : Promise<string> {
        const response = await fetch('http://localhost:3000/test');
        const json = await response.json();
        return json.test;
    }
}