import React, {Component, lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import Header from "./components/layout/Header";
import store from "./store";

// Lazy Load Components
const Home = lazy(() => import("../components/Home"));
const About = lazy(() => import("../components/About"));
const Playlist = lazy(() => import("./components/Playlist"));
const DepartmentList = lazy(() => import("./components/department/DepartmentList"));
const CreateDepartment = lazy(() => import("./components/department/CreateDepartment"));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Header />
                    <Suspense fallback={<div>Загрузка...</div>}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/playlist" component={Playlist} />
                            <Route exact path="/depts" component={DepartmentList} />
                            <Route exact path="/depts/add" component={CreateDepartment} />
                        </Switch>
                    </Suspense>
                </Router>
            </Provider>
        );
    }
}

export default App;
