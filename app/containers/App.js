import React, {Component} from 'react';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux'



import {fetch} from "../actions"
 

const  App = (props) => {
    console.log(props)
     return(
         <div onClick={() => props.callfetch("myname")}>{props.test}</div>

     )
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
  
})(App)