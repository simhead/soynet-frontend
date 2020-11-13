import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { Home, UserView, UserInsert, UserUpdate, ToolClock, Users, Devices } from '../pages'
import { FooterContainer } from '../containers/footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

/*
function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/users" exact component={Users} />
                <Route path='/devices' component={Devices} />
                <Route path="/user/create" exact component={UserInsert} />
                <Route path="/tool/clock" exact component={ToolClock} />
                <Route
                    path="/user/view/:id"
                    exact
                    component={UserView}
                />
                <Route
                    path="/user/update/:id"
                    exact
                    component={UserUpdate}
                />
            </Switch>

        </Router>
    )
}
*/

function App() {
    return (
        <div className={"App"}>
            <Router>
            <NavBar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path="/users" exact component={Users} />
                <Route path='/devices' component={Devices} />
                <Route path="/user/create" exact component={UserInsert} />
                <Route path="/tool/clock" exact component={ToolClock} />
                <Route
                    path="/user/view/:id"
                    exact
                    component={UserView}
                />
                <Route
                    path="/user/update/:id"
                    exact
                    component={UserUpdate}
                />
            </Switch>
            </Router>
            <FooterContainer />
        </div>
    );
}

export default App
