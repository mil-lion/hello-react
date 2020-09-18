import React, {useState} from "react";

// Functional Component PureCounterButtonFunc
const PureCounterButtonFunc = React.memo((props) => {
    // Initial State
    const [count, setCount] = useState(1);
    // Render Component
    console.log("PureCounterButtonFunc", "render()");
    return (
        <button
            color={props.color}
            onClick={() => setCount(count + 1)}
        >
            Счётчик: {count}
        </button>
    );
}, (prevProps, nextProps) => {
    console.log("PureCounterButtonFunc", "shouldComponentUpdate()");
    if (prevProps.color !== nextProps.color) {
        return true;
    }
    return false;
});

export default PureCounterButtonFunc;
