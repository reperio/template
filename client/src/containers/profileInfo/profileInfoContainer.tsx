import React from 'react';
import ReperioBar from '../../components/misc/reperioBar'
import {DropdownButton, MenuItem, Navbar} from 'react-bootstrap';

class ProfileInfoContainer extends React.Component {
    props: any;

    render() {
        return (
            <DropdownButton className="r-profile-container"
                            id="profileInfo"
                            title={
                                <div className="r-profile">
                                    <div className="r-profile-initials">BA</div>
                                </div>
                            }
                            noCaret>
                    <span className="r-profile-content"> 
                        Name<br/>
                        Account<br/>
                        Phone<br/>
                        Email<br/>
                    </span>
                <MenuItem divider />
                <MenuItem eventKey='3'><i className="fa fa-sign-out fa-fw"></i> Logout</MenuItem>
            </DropdownButton>
                
        )
    }
}

export default ProfileInfoContainer;