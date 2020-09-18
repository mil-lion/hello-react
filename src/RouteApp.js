import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HeaderApp from "./components/layouts/HeaderApp";
import PageWithTitle from "./components/decorators/PageWithTitle";

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

function RouteApp() {
    return (
        <Router>
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
        </Router>
    );
}

export default RouteApp;
