import { Route, Switch } from "react-router-dom";
import React from "react";
import Dashboard from "../pages/user/dashboard/Dashboard";
import Login from "../pages/user/auth/Login";
import Register from "../pages/user/auth/Register";
import SendResetPasswordLink from "../pages/user/auth/password/SendResetPasswordLink";
import ResetPassword from "../pages/user/auth/password/ResetPassword";

const Web = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route path={"/login"} component={Login} exact />
                <Route path={"/register"} component={Register} exact />
                <Route
                    path={"/password/reset"}
                    component={SendResetPasswordLink}
                    exact
                />
                <Route
                    path={"/password/:token/reset"}
                    component={ResetPassword}
                    exact
                />
                <Route path={"/"} component={Dashboard} exact />
            </Switch>
        </React.Fragment>
    );
};
export default Web;
