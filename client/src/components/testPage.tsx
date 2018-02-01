import React from 'react';
import {wrap} from '../store/reactReduxContainer';
import {TestService} from '../services';

interface IState {
    testVal: string;
    noteToAdd: string;
    notes: string[];
}

interface IProps {
    testService: TestService;
}

class TestPage implements React.StatelessComponent {
    constructor(props : Readonly<IProps>) {
        super(props);
        this.state = {testVal: "-", noteToAdd: "", notes: []};
        this.props.testService.getTestValue().then(val => {
            this.setState({testVal: val});
        });
        this.props.testService.getNotes().then(val => {
            this.setState({notes: val});
        });
    }
    handleChange(e: any) {
        this.setState({ noteToAdd: e.target.value });
    }

    async addNote(e: any) : Promise<void> {
        const note = this.state.noteToAdd;
        this.setState({ noteToAdd: "" });
        const newNote = await this.props.testService.addNote(note);
        this.setState({notes: this.state.notes.concat([newNote])})
    }

    render() {
        return (
            <div>
                <h1>Test</h1>
                <p><b>Value from API:</b> {this.state.testVal}</p>
                <input type="text" value={this.state.noteToAdd} onChange={this.handleChange.bind(this)} />
                <button onClick={this.addNote.bind(this)}>Add note</button>
                {this.state.notes.map(n => <p>{n}</p>)}
            </div>
        );
    }
}

export default wrap(TestPage);