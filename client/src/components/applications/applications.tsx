import React from 'react'
import ReperioBar from '../misc/reperioBar';

const Applications = (props: any) => (
    <li className="r-applications-menu">
        <a className="r-applications" href="#">
            <div className="r-applications-squares">
                <div className="r-applications-top-left-square r-applications-square"></div>
                <div className="r-applications-square"></div>
                <div className="r-applications-square"></div>
                <div className="r-applications-square"></div>
            </div>
        </a>
        <ul className="r-applications-menu-content">
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a></a></li>
            <div className="r-applications-menu-content-footer">
                <ReperioBar />
            </div>
        </ul>        
    </li>
);

export default Applications;