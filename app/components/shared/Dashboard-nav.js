import React, {Component} from 'react';

const DashboardNav = (props) => {
    return(
        <div id="dashboard-navigation">
            <nav>
                <ul>
                    <li>{props.test}</li>
                    <li>B</li>
                    <li>C</li>
                </ul>
            </nav>
        </div>
    );
}

export default DashboardNav ;