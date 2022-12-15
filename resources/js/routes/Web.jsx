import { Route, Switch } from "react-router-dom";
import React from "react";
import Dashboard from "../pages/user/dashboard/Dashboard";
import Login from "../pages/user/auth/Login";
import Register from "../pages/user/auth/Register";

const Web = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route path={"/login"} component={Login} exact />
                <Route path={"/register"} component={Register} exact />
                <Route path={"/"} component={Dashboard} exact />
            </Switch>
        </React.Fragment>
    );
};
export default Web;
