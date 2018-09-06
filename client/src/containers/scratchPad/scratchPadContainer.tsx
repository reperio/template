import React from 'react'
import {Button, Anchor, Textbox, Checkbox, RadioButton, Picker, Datepicker, Grid, Wrapper} from '@reperio/ui-components';

class ScratchPadContainer extends React.Component {
    props: any;

    state: {
        selectedOption: string,
            selectedMulti: any,
            textInputValue: string,
            selectedDate: any,
            checked: boolean,
            selectedRadio: string,
            gridData: any[],
            gridColumns: any[]
    } = {
        selectedOption: '',
        selectedMulti: [],
        textInputValue: '',
        selectedDate: null,
        checked: false,
        selectedRadio: '',
        gridData: [
            {
                firstName: 'hello',
                lastName: 'its me',
                age: 1,
                Placeholder: 'TEST'
            },
            {
                firstName: 'its me',
                lastName: 'mario',
                age: 2
            },
            {
                firstName: 'dunkin',
                lastName: 'donuts',
                age: 3
            },
        ],
        gridColumns: [
            {
                Header: "First Name",
                accessor: "firstName",
                Placeholder: "test"
            },
            {
                Header: "Last Name",
                accessor: "lastName",
                Placeholder: "test1"
            },
            {
                Header: "Age",
                accessor: "age",
                Placeholder: "test2"
            }
        ]
    }

    handleClick = (event: any) => {
        console.log('clicked: ' + event);
    }

    handleCheckboxChange = (event: any) => {
        this.setState({checked: event.target.checked});
    }

    handleDatepickerChange = (selectedDate: any) => {
        this.setState({selectedDate});

        if (selectedDate) {
            console.log(`Selected date: ${selectedDate}`);
        }
    }

    handleRadiochange = (event: any) => {
        let selectedRadio = event.target.value;
        this.setState({ selectedRadio });

        if (selectedRadio) {
            console.log(`Selected: ${selectedRadio}`)
        }
    }

    handleChange = (option: any) => {
        let selectedOption = option.value;
        this.setState({ selectedOption });
        // selectedOption can be null when the `x` (close) button is clicked
        if (selectedOption) {
            console.log(`Selected: ${selectedOption}`);
        }
    }

    handleMultiChange = (options: Array<any>) => {
        let selectedMulti = options;
        this.setState({ selectedMulti });
        if (selectedMulti) {
            console.log('Multi Selected: ');
            console.log(selectedMulti);
        }
    }

    handleTextChange = (textInputValue: any) => {
        this.setState({ textInputValue: textInputValue.target.value });
        if (textInputValue){
            console.log(`Input value: ${textInputValue.target.value}`)
        }
    }

    render() {
        const { selectedOption, selectedMulti, textInputValue, checked, selectedRadio, gridColumns, gridData } = this.state;

        return (
            <div>
                <div className="col-md-6">
                    <div className="row">
                        <Wrapper>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div>Buttons</div>
                                        <div className="col-md-3">
                                            <Button color="neutral" name="neutral" text="Neutral" onClick={this.handleClick} />
                                        </div>
                                        <div className="col-md-3">
                                            <Button color="danger" name="danger" text="Danger" />
                                        </div>
                                        <div className="col-md-3">
                                            <Button color="success" name="success" text="Success" />
                                        </div>
                                        <div className="col-md-3">
                                            <Button color="cancel" name="cancel" text="Cancel" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="col-md-6">
                                        <Button color="neutral" name="wide_neutral" text="Wide" wide />
                                        </div>
                                        <div className="col-md-6">
                                        <Button color="neutral" name="wide_neutral" text="Wide" wide />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Wrapper>
                    </div>
                    <div className="row">
                        <Wrapper>
                            <div className="col-md-12">
                                <div>Buttons (disabled)</div>
                                <div className="col-md-3">
                                    <Button color="neutral" name="neutraldisabled" text="Neutral" disabled />
                                </div>
                                <div className="col-md-3">
                                    <Button color="danger" name="dangerdisabled" text="Danger" disabled />
                                </div>
                                <div className="col-md-3">
                                    <Button color="success" name="successdisabled" text="Success" disabled />
                                </div>
                                <div className="col-md-3">
                                    <Button color="cancel" name="canceldisabled" text="Cancel" disabled />
                                </div>
                            </div>
                        </Wrapper>
                    </div>
                    <div className="row">
                        <Wrapper>
                            <div className="col-md-12">
                                <div>Inputs</div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <Textbox type="text" value={this.state.textInputValue} onChange={this.handleTextChange} placeholder="This is a placeholder" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <Textbox value={this.state.textInputValue} onChange={this.handleTextChange} placeholder="This is a disabled input" disabled />
                                    </div>
                                </div>
                            </div> 
                        </Wrapper>
                    </div>
                    <div className="row">
                        <Wrapper>
                            <div className="col-md-12">
                                <div>Anchors</div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <Anchor href="#" text="Standard Link" />
                                    </div>
                                </div>
                            </div>
                        </Wrapper>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <Wrapper>
                            <div className="col-md-12">
                                <div>Checkboxes/Radio Buttons</div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Checkbox label="Checkbox Label" name="tstChk" checked={checked} onChange={this.handleCheckboxChange} /><br/>
                                        <Checkbox label="Disabled Checkbox Label" name="tstChkDisabled" checked={false} onChange={this.handleCheckboxChange} disabled />
                                    </div>
                                    <div className="col-md-6">
                                        <RadioButton label="Radio Label 1" name="rad" value="rad1" selectedOption={selectedRadio} onChange={this.handleRadiochange} /><br/>
                                        <RadioButton label="Radio Label 2" name="rad" value="rad2" selectedOption={selectedRadio} onChange={this.handleRadiochange} /><br/>

                                        <RadioButton label="Disabled Label 1" name="radDis" value="rad1" selectedOption={selectedRadio} disabled onChange={this.handleRadiochange} /><br />
                                        <RadioButton label="Disabled Label 2" name="radDis" value="rad2" selectedOption={selectedRadio} disabled onChange={this.handleRadiochange} />
                                    </div>
                                </div>
                            </div>
                        </Wrapper>
                    </div>
                    <div className="row">
                        <Wrapper>
                            <div className="col-md-12">
                                <div>Dropdowns</div>
                                <div>
                                    <Picker
                                        value={selectedOption}
                                        placeholder="This is a single picker"
                                        onChange={this.handleChange}
                                        options={[
                                            {value: 1, label: '1'},
                                            {value: 2, label: 'Option 2'}
                                        ]} />
                    </div><br />
                    <div>
                        <Picker
                            value={selectedOption}
                            disabled
                            placeholder="This is a disabled picker"
                            onChange={this.handleChange}
                            options={[
                                { value: 1, label: '1' },
                                { value: 2, label: 'Option 2' }
                            ]} />
                    </div><br/>
                    <div>
                        <Picker
                            value={selectedMulti}
                            placeholder="This is a multi picker"
                            multi
                            onChange={this.handleMultiChange}
                            options={[
                                { value: 1, label: '1' },
                                { value: 2, label: 'Option 2' }
                            ]} />
                    </div><br />
                    <div>
                        <Picker
                            value={selectedMulti}
                            disabled
                            multi
                            placeholder="This is a disabled multi picker"
                            onChange={this.handleMultiChange}
                            options={[
                                { value: 1, label: '1' },
                                { value: 2, label: 'Option 2' }
                            ]} />
                    </div>
                </div>
            </Wrapper>
        </div>
        <div className="row">
            <Wrapper>
                <div className="col-md-12">
                    <div>Datepickers</div>
                    <div>
                        <Datepicker 
                            selected={this.state.selectedDate} 
                            onChange={this.handleDatepickerChange}
                            placeholder="Datepicker" />
                    </div><br />
                    <div>
                        <Datepicker
                            selected={this.state.selectedDate}
                            onChange={this.handleDatepickerChange}
                            placeholder="Disabled Datepicker"
                            disabled />
                    </div>
                </div>
            </Wrapper>
        </div>
        <Wrapper>
            <div className="col-md-12">
                <Grid 
                    data={gridData}
                    filterable={true}
                    columns={gridColumns}
                    />
            </div>
        </Wrapper>
    </div>
</div>
)
    }
}

export default ScratchPadContainer;
