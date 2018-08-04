import React from 'react'
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import Button from '../../components/Button';
import Textbox from '../../components/Textbox';
import Anchor from '../../components/Anchor';
import Checkbox from '../../components/Checkbox';
import RadioButton from '../../components/RadioButton';

class ScratchPadContainer extends React.Component {
    props: any;
    
    state: {
        selectedOption: string,
        selectedMulti: any,
        textInputValue: string,
        selectedDate: any,
        checked: boolean
    } = {
        selectedOption: '',
        selectedMulti: [],
        textInputValue: '',
        selectedDate: null,
        checked: false
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

    handleChange = (event: any) => {
        let selectedOption = event.target.value;
        this.setState({ selectedOption });
        // selectedOption can be null when the `x` (close) button is clicked
        if (selectedOption) {
            console.log(`Selected: ${selectedOption}`);
        }
    }

    handleMultiChange = (selectedMulti: any) => {
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
        const { selectedOption, selectedMulti, textInputValue, checked } = this.state;

        return (
            <div>
                <div className="col-md-6">
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
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div>Inputs</div>
                            <div className="row">
                                <div className="col-md-12">
                                    <Textbox value={this.state.textInputValue} onChange={this.handleTextChange} placeholder="This is a placeholder" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <Textbox value={this.state.textInputValue} onChange={this.handleTextChange} placeholder="This is a disabled input" disabled />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div>Anchors</div>
                            <div className="row">
                                <div className="col-md-12">
                                    <Anchor href="#" text="Standard Link" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-12">
                            <div>Checkboxes/Radio Buttons</div>
                            <div className="row">
                                <div className="col-md-6">
                                    <Checkbox label="Checkbox Label" name="tstChk" checked={checked} onChange={this.handleCheckboxChange} /><br/>
                                    <Checkbox label="Disabled Checkbox Label" name="tstChkDisabled" checked={false} onChange={this.handleCheckboxChange} disabled />
                                </div>
                                <div className="col-md-6">
                                    <RadioButton label="Radio Label 1" name="rad" value="rad1" selectedOption={selectedOption} onChange={this.handleChange} /><br/>
                                    <RadioButton label="Radio Label 2" name="rad" value="rad2" selectedOption={selectedOption} onChange={this.handleChange} /><br/>

                                    <RadioButton label="Disabled Label 1" name="radDis" value="rad1" selectedOption={selectedOption} disabled onChange={this.handleChange} /><br />
                                    <RadioButton label="Disabled Label 2" name="radDis" value="rad2" selectedOption={selectedOption} disabled onChange={this.handleChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div>Dropdowns</div>
                            <div>
                                <Select
                                    className=""
                                    value={selectedOption}
                                    placeholder="This is a single picker"
                                    onChange={this.handleChange}
                                    options={[
                                        {value: 1, label: '1'},
                                        {value: 2, label: 'Option 2'}
                                    ]} />
                            </div><br />
                            <div>
                                <Select
                                    className=""
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
                                <Select
                                    className=""
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
                                <Select
                                    className=""
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
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div>Datepickers</div>
                            <div>
                                <DatePicker 
                                    selected={this.state.selectedDate} 
                                    onChange={this.handleDatepickerChange}
                                    placeholderText="Datepicker"
                                    className="r-form-control r-text-input" />
                            </div><br />
                            <div>
                                <DatePicker
                                    selected={this.state.selectedDate}
                                    onChange={this.handleDatepickerChange}
                                    placeholderText="Disabled Datepicker"
                                    className="r-form-control r-text-input"
                                    disabled />
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        )
    }
}

export default ScratchPadContainer;