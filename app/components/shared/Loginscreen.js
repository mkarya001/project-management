import React, {Component} from 'react';

export default class Loginscreen extends Component{

    constructor(props){
        super(props);
        this.loginSubmit = this.loginSubmit.bind(this);
        this.handleInputChages = this.handleInputChages.bind(this);
        this.state = {
            user : {}
        }
    }

    loginSubmit(e){
        e.preventDefault();
        console.log(this.state.user);
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
            </div>
        )
    }

}