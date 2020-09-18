import React, {lazy, Suspense, useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HeaderApp from "./components/layouts/HeaderApp";
import PageWithTitle from "./components/decorators/PageWithTitle";
import {ThemeContext, themes, UserContext} from "./context";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const WelcomeDialog = lazy(() => import("./components/WelcomeDialog"));
const Clock = lazy(() => import("./components/Clock"));
const Game = lazy(() => import("./components/game/Game"));
const Calculator = lazy(() => import("./components/calculator/Calculator"));
const FilterableEmployeeTable = lazy(() => import("./components/FilterableEmployeeTable"));
const Department = lazy(() => import("./components/Department"));

const GamePage = () => (
    <PageWithTitle title="Tic Tac Toe">
        <Game />
    </PageWithTitle>);

function ContextApp() {
    // Initial State
    const [theme, setTheme] = useState(themes.light);
    // Handler
    function toggleTheme() {
        setTheme(theme === themes.dark ? themes.light : themes.dark);
    }
    return (
        <Router>
            <ThemeContext.Provider value={{theme: theme, toggleTheme: toggleTheme}}>
                <UserContext.Provider value={{user: "Igor Morenko"}}>
                    <HeaderApp />
                    <Suspense fallback={<div>Загрузка...</div>}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/welcome" component={WelcomeDialog} />
                            <Route path="/clock" component={Clock} />
                            <Route path="/game" component={GamePage} />
                            <Route path="/calc" component={Calculator} />
                            <Route path="/emps" component={FilterableEmployeeTable} />
                            <Route path="/dept/:deptno" component={Department} />
                        </Switch>
                    </Suspense>
                </UserContext.Provider>
            </ThemeContext.Provider>
        </Router>
    );
}

export default ContextApp;
