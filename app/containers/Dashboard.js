import React, {Component} from 'react';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux' 


import {fetch} from "../actions"
 
import Dashboardroutes from '../routes/Dashboardroutes';
import DashboardNav from '../components/shared/Dashboard-nav';

const  Dashboard = (props) => {
    console.log(props);
      return(
         <div className="dashboard">
             <DashboardNav {...props} />
             <div className="dashboard-body">
                
                <div className="dashboard-account">
                    <div className="menu">M</div>
                    <div className="Search-bar">
                        <input type="text" />
                    </div>
                    <div className="event-manage">
                        <ul>
                            <li>s</li>
                            <li>s</li>
                            <li>s</li>
                        </ul>
                    </div>
                </div>
                <Dashboardroutes 
                {...props}
                />
             </div>

         </div>
 );
}



export default connect((store) => {
    return {
        test: store.books.name
    }
}, (dispatch) => {

    return bindActionCreators(
        {
            callfetch : fetch
         }, dispatch
    )
  
})(Dashboard);