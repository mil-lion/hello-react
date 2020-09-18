import React, {useEffect, useRef, useState} from "react";
import FormattedDate from "./FormattedDate";

// *********** Component with State ****************

// Функционфльный компонент Clock
function ClockFunc(props) {
    // Bind Ref on Component
    const intervalRef = useRef(/*initial value*/); // store timerId

    // Initial State
    const [time, setTime] = useState(new Date());

    // Component Lifecycle
    // event: componentDidMount, !!!componentDidUpdate!!!, и componentWillUnmount
    useEffect(() => {
        console.log("ClockFunc.componentDidMount:", "create timer");
        // create timer
        intervalRef.current = setInterval(() => setTime(new Date())); // save timerId
        return () => {
            console.log("ClockFunc.componentWillUnmount:", "remove timer");
            // remove timer
            clearInterval(intervalRef.current); // timerId
        }
    }, []); // empty dependence for event componentDidMount, componentWillUnmount
    // useEffect(() => {
    //     console.log("ClockFunc.shouldComponentUpdate:", "1");
    //     return () => {
    //         console.log("ClockFunc.componentDidUpdate:", "2");
    //     }
    // }, [time]); // when change state time for event componentDidUpdate

    // Render Component
    // console.log("ClockFunc.render:")
    return (
        <div>
            <h1>Привет, Мир!!!</h1>
            <FormattedDate time={time} />
        </div>
    );
}

export default ClockFunc;
