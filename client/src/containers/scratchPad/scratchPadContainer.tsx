import React from 'react'

class ScratchPadContainer extends React.Component {
    props: any;

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <div>Buttons</div>
                        <button className="r-form-control r-btn r-neutral">Neutral</button>
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