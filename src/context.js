import React from "react";

// Theme Config
export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee'
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222'
    }
};

// Theme Context
export const ThemeContext = React.createContext({
    theme: themes.light,
    toggleTheme: () => {}
});

ThemeContext.displayName = "MyThemeContext"; // display name for dev tools

// User Context
export const UserContext = React.createContext({user: "Igor"});
UserContext.displayName = "MyUserContext";