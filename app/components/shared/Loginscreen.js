import React, {Component} from 'react';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux'

import {changeName} from "../../actions"

class Loginscreen extends Component{

    constructor(props){
        super(props);
        this.loginSubmit = this.loginSubmit.bind(this);
        this.handleInputChages = this.handleInputChages.bind(this);
        this.state = {
            user : {}
        }
        console.log(this.props)
    }

    loginSubmit(e){
        e.preventDefault();
        this.props.testget(this.state.user)
    }

    handleInputChages(event){
        const { user } = this.state;
        const { name, value } = event.target; 
        user[name] = value;
    }

    render(){
        return(
            <div className="login-screen">
                <form onSubmit={this.loginSubmit}>
                    <h2>Login</h2>                    
                    <fieldset>
                        <label>Username</label>
                        <input type="text" placeholder="Type your username" name="username" onChange={this.handleInputChages} />
                    </fieldset>

                    <fieldset>
                        <label>Password</label>
                        <input type="password" placeholder="Type your password" name="password"  onChange={this.handleInputChages}/>
                    </fieldset>

                    <div>
                        <button type="submit">submit</button>
                        <a href="#">Forget Password?</a>
                        
                    </div>
                </form>
                { this.props.name ?
                    <div>
                        Value Stored in Redux Store.
                        <p> Username : {this.props.name} </p>
                        <p> Password : {this.props.password} </p>
                    </div> : ''
                }
            </div>
        )
    }

}

export default connect((store) => {
    console.log(store);
    return {
        ...store.testreducer
    }
}, (dispatch) => {

    return bindActionCreators(
        {
            testget : changeName
         }, dispatch
    )
  
})(Loginscreen);