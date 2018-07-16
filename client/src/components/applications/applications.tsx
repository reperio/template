import React from 'react'
import ReperioBar from '../misc/reperioBar';

const Applications = (props: any) => (
    <ul className="r-applications-container">
        <li className="r-applications-menu" tabIndex={1}>
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
                <li onClick={() => alert('4')}><a href="#"></a></li>
                <div className="r-applications-menu-content-footer">
                    <ReperioBar />
                </div>
            </ul>      
        </li>
    </ul>
);

export default Applications;