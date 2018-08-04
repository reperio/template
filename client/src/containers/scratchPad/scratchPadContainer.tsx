import React from 'react'
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import Button from '../../components/Button';

class ScratchPadContainer extends React.Component {
    props: any;
    
    state: {
        selectedOption: string,
        selectedMulti: any,
        textInputValue: string,
        selectedDate: any
    } = {
        selectedOption: '',
        selectedMulti: [],
        textInputValue: '',
        selectedDate: null
    }

    handleClick = (event: any) => {
        console.log('clicked: ' + event);
    }

    handleDatepickerChange = (selectedDate: any) => {
        this.setState({selectedDate});

        if (selectedDate) {
            console.log(`Selected date: ${selectedDate}`);
        }
    }

    handleChange = (selectedOption: any) => {
        this.setState({ selectedOption });
        // selectedOption can be null when the `x` (close) button is clicked
        if (selectedOption) {
            console.log(`Selected: ${selectedOption.label}`);
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
        const { selectedOption, selectedMulti, textInputValue } = this.state;

        return (
            <div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-12">
                            <div>Buttons</div>
                            <div className="col-md-3">
                                <Button color="neutral" name="test" text="Neutral" onClick={this.handleClick} />
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
                                <button className="r-form-control r-btn r-neutral" disabled>Neutral</button>
                            </div>
                            <div className="col-md-3">
                                <button className="r-form-control r-btn r-danger" disabled>Danger</button>
                            </div>
                            <div className="col-md-3">
                                <button className="r-form-control r-btn r-success" disabled>Success</button>
                            </div>
                            <div className="col-md-3">
                                <button className="r-form-control r-btn r-cancel" disabled>Cancel</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div>Inputs</div>
                            <div className="row">
                                <div className="col-md-12">
                                    <input type="text" value={this.state.textInputValue} onChange={this.handleTextChange} className="r-form-control r-text-input" placeholder="This is a placeholder" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <input type="text" value={this.state.textInputValue} className="r-form-control r-text-input" placeholder="This is a disabled input" disabled />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div>Anchors</div>
                            <div className="row">
                                <div className="col-md-12">
                                    <a href="#" className="r-anchor">Standard Link</a>
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
                                    <label className="r-checkbox-container">
                                        Checkbox Label
                                        <input type="checkbox" name="tstChk" id="" />
                                        <span className="r-checkbox"></span>
                                    </label><br/>
                                    <label className="r-checkbox-container">
                                        Disabled Checkbox Label
                                        <input type="checkbox" name="tstChk2" disabled id="" />
                                        <span className="r-checkbox"></span>
                                    </label>
                                </div>
                                <div className="col-md-6">
                                    <label className="r-checkbox-container">
                                        Radio Label 1
                                        <input type="radio" name="rad"/>
                                        <span className="r-radio-checkmark"></span>
                                    </label><br/>
                                    <label className="r-checkbox-container">
                                        Radio Label 2
                                        <input type="radio" name="rad" />
                                        <span className="r-radio-checkmark"></span>
                                    </label>
                                    <br />
                                    <label className="r-checkbox-container">
                                        Disabled Radio 1
                                        <input type="radio" name="radDis" checked={true} disabled />
                                        <span className="r-radio-checkmark"></span>
                                    </label><br/>
                                    <label className="r-checkbox-container">
                                        Disabled Radio 2
                                        <input type="radio" name="radDis" disabled />
                                        <span className="r-radio-checkmark"></span>
                                    </label>
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