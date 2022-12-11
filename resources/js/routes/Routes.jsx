import {Route, Switch} from "react-router-dom";
import React from "react";
import Dashboard from "../components/pages/dashboard/Dashboard";

const Routes = () => {
    return(
        <React.Fragment>
            <Switch>
                <Route path={"/"} component={Dashboard} exact />
            </Switch>
        </React.Fragment>
    )
}
export default Routes;
