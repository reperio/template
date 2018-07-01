import React from 'react'

class ScratchPadContainer extends React.Component {
    props: any;

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
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
                    <div className="col-md-6">
                        <div>Buttons (disabled)</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ScratchPadContainer;