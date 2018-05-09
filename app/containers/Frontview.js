import React, {Component} from 'react';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux'

import Header from './Header';


import {fetch} from "../actions"
 
import Frontroutes from '../routes/Frontroutes';

const  Frontview = (props) => {
    console.log(props);
      return(
         <div>
             <Header/>
                <Frontroutes />
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
  
})(Frontview);