import React from "react";
import {ThemeContext} from "../context";

function ThemeToggleButton(props) {
    // hook useContext()
    // Подписка на изменение контекста
    return (
        <ThemeContext.Consumer>
            {({theme, toggleTheme}) => (
                <button
                    onClick={toggleTheme}
                    style={{backgroundColor: theme.background, color: theme.foreground}}
                >
                    Toggle Theme
                </button>
            )}
        </ThemeContext.Consumer>
    );
}

export default ThemeToggleButton;