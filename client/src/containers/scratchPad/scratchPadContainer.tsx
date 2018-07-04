import React from 'react'
import Select from 'react-select';

class ScratchPadContainer extends React.Component {
    props: any;
    
    state = {
        selectedOption: '',
    }

    handleChange = (selectedOption: any) => {
        this.setState({ selectedOption });
        // selectedOption can be null when the `x` (close) button is clicked
        if (selectedOption) {
            console.log(`Selected: ${selectedOption.label}`);
        }
    }

    render() {
        const { selectedOption } = this.state;

        return (
            <div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-12">
                            <div>Buttons</div>
                            <div className="col-md-3">
                                <button className="r-form-control r-btn r-neutral">Neutral</button>
                            </div>
                            <div className="col-md-3">
                                <button className="r-form-control r-btn r-danger">Danger</button>
                            </div>
                            <div className="col-md-3">
                                <button className="r-form-control r-btn r-success">Success</button>
                            </div>
                            <div className="col-md-3">
                                <button className="r-form-control r-btn r-cancel">Cancel</button>
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
                                    <input type="text" className="r-form-control r-text-input" placeholder="This is a placeholder" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <input type="text" className="r-form-control r-text-input" placeholder="This is a disabled input" disabled />
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
                            </div><br/>
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
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        )
    }
}

export default ScratchPadContainer;