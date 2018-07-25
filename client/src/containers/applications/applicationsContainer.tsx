import React from 'react';
import {DropdownButton} from 'react-bootstrap';

class ApplicationsContainer extends React.Component {
    props: any;

    render() {
        return (
            <DropdownButton className="r-applications-container"
                            id="applications"
                            title={
                                <div className="r-applications" >
                                    <div className="r-applications-squares">
                                        <div className="r-applications-top-left-square r-applications-square"></div>
                                        <div className="r-applications-square"></div>
                                        <div className="r-applications-square"></div>
                                        <div className="r-applications-square"></div>
                                    </div>
                                </div>
                            }
                            noCaret>
                <span className="r-applications-container-content">
                    <div>a</div>
                    <div>b</div>
                    <div>c</div>
                    <div>d</div>
                </span>
            </DropdownButton>
        );
    }
}

export default ApplicationsContainer;