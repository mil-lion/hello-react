import React from "react";

// Component UserGreeting
function UserGreeting(props) {
    return <h1>С возврощением!</h1>
}

// Component GuestGreeting
function GuestGreeting(props) {
    return <h1>Войдите, пожалуйста!</h1>
}

// Component Greeting
function Greeting(props) {
    const {isLoggedIn} = props;
    if (isLoggedIn) {
        return <UserGreeting />
    } else {
        return <GuestGreeting />
    }
}

export default Greeting;
