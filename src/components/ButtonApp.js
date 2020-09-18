import React, {Component} from 'react';
import ToggleButton from "./ToggleButton";

class ButtonApp extends Component {
    constructor(props) {
        super(props);
        // Initial State
        // Bind methods to this object
        this.handleClick = this.handleClick.bind(this);
    }

    activateLasers() {
        console.log("Click Button")
    }

    handleClick(event) {
        console.log('По ссылке кликнули', this);
        if (this) {
            console.log("Сообщение:", this.props.message);
        }
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <button onClick={this.activateLasers}>
                    Активировать лазеры
                </button>
                <br/>
                <a href="#" onClick={this.handleClick}>
                    Нажми на меня 1 (bind)
                </a>
                <br/>
                <a href="#" onClick={(e) => this.handleClick(e)}>
                    Нажми на меня 2 (=>)
                </a>
                <br/>
                <ToggleButton />
            </div>
        );
    }
}

export default ButtonApp;
