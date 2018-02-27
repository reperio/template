var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fetch from 'node-fetch';
export class TestService {
    getTestValue() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch('http://localhost:3000/test');
            const json = yield response.json();
            return json.test;
        });
    }
    getNotes() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch('http://localhost:3000/notes');
            return yield response.json();
        });
    }
    addNote(note) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = { note };
            const response = yield fetch('http://localhost:3000/add-note', { method: 'POST', body: JSON.stringify(payload) });
            const json = yield response.json();
            return json.text;
        });
    }
}
//# sourceMappingURL=testService.js.map