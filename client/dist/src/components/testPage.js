var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React from 'react';
import { TestService } from '../services';
export class TestPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { testVal: "-", noteToAdd: "", notes: [] };
        this.testService = new TestService();
        this.testService.getTestValue().then(val => {
            this.setState({ testVal: val });
        });
        this.testService.getNotes().then(val => {
            this.setState({ notes: val });
        });
    }
    handleChange(e) {
        this.setState({ noteToAdd: e.target.value });
    }
    addNote(e) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const note = this.state.noteToAdd;
                this.setState({ noteToAdd: "" });
                const newNote = yield this.testService.addNote(note);
                this.setState({ notes: this.state.notes.concat([newNote]) });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("h1", null, "Test"),
            React.createElement("p", null,
                React.createElement("b", null, "Value from API:"),
                " ",
                this.state.testVal),
            React.createElement("input", { type: "text", value: this.state.noteToAdd, onChange: this.handleChange.bind(this) }),
            React.createElement("button", { onClick: this.addNote.bind(this) }, "Add note"),
            this.state.notes.map((n, i) => React.createElement("p", { key: i.toString() }, n))));
    }
}
//# sourceMappingURL=testPage.js.map