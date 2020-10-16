import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { UserList, UserView, UserInsert, UserUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/user/list" exact component={UserList} />
                <Route path="/user/create" exact component={UserInsert} />
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

export default App
