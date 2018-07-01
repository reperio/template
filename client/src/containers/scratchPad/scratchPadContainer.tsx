import React from 'react'

class ScratchPadContainer extends React.Component {
    props: any;

    render() {
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
                </div>
                
                
            </div>
        )
    }
}

export default ScratchPadContainer;