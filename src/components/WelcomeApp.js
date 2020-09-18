import React from "react";
import WelcomeClass, {WelcomeFunc} from "./Welcome";

function WelcomeApp() {
    return (
        <dev>
            <WelcomeFunc name='Игорь Моренко' />
            <WelcomeClass name='Igor Morenko' />
        </dev>
    );
}

export default WelcomeApp;
