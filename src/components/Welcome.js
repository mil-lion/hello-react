import React, {Component} from "react";

// ********* Stateless Components *************

// Функциональный компонент
export function WelcomeFunc(props) {
    return (
        <h1>Привет, {props.name}!</h1>
    );
}

// Классовый компонент
class WelcomeClass extends Component {
    render() {
        return (
            <h1>Hello, {this.props.name}!</h1>
        );
    }
}

export default WelcomeClass;
