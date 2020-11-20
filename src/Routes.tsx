import {BrowserRouter as Router, Redirect, Route, Switch, useLocation} from "react-router-dom";
import UserListContainer from "./containers/UserListContainer";
import App from "./App";
import React from "react";
import {IRoutesProps} from "./Interface";
import MessageBox from "./components/MessageBox";

export default function () {

    return (
        <Router >
            <div>
                <Switch>
                    <Route exact path="/users">
                        <UserListContainer/>
                    </Route>
                    <Route exact path="/">
                        <App/>
                    </Route>
                    <Route exact path="/chat/:id">
                        <MessageBox/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )

}