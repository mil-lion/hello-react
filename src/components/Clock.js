import React, {Component} from "react";
import FormattedDate from "./FormattedDate";

// *********** Component with State ****************

// Классовый компонент Clock
class Clock extends Component {
    constructor(props) {
        super(props);
        // Initial State
        this.state = {
            time: new Date()
        };
    }
    tick() {
        // console.log("Clock.tick")
        this.setState( {
            time: new Date()
        });
    }
    // Component Lifecycle
    componentDidMount() {
        console.log("Clock.componentDidMount:", "create timer");
        // create timer
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        console.log("Clock.componentWillUnmount:", "remove timer");
        // remove timer
        clearInterval(this.timerId);
    }
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log("Clock.shouldComponentUpdate:");
    // }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log("Clock.componentDidUpdate:", prevState.time, this.state.time);
    // }
    // Render Component
    render() {
        const {time} = this.state;
        return (
            <div>
                <h1>Привет, Мир!</h1>
                <FormattedDate time={time} />
            </div>
        );
    }
}

export default Clock;
