import React, {Component} from 'react';
import Greeting from "./Greeting";

// Component LoginButton
function LoginButton(props) {
    return(
        <button onClick={props.onClick}>
            Войти
        </button>
    );
}

// Component LogoutButton
function LogoutButton(props) {
    return(
        <button onClick={props.onClick}>
            Выйти
        </button>
    );
}

// Component Login
class LoginControl extends Component {
    constructor(props) {
        super(props);
        // Initial State
        this.state = {
            isLoggedIn: false
        };
        // Bind methods to this object
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }
    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }
    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }
    render() {
        const {isLoggedIn} = this.state;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

export default LoginControl;
