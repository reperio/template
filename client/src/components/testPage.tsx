import React from 'react';
import {TestService} from '../services';

interface IState {
    testVal?: string;
}

export class TestPage extends React.Component<{}, IState> {
    constructor(props : Readonly<{}>) {
        super(props);
        this.state = {testVal: "-"};
        const testService = new TestService();
        testService.getTestValue().then(val => {
            this.setState({testVal: val});
            console.log(val);
        });
    }
    render() {
        return (
            <div>
                <h1>Test</h1>
                <p><b>Value from API:</b> {this.state.testVal}</p>
            </div>
        );
    }
}
