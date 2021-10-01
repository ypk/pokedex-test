import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AppRoot, NotFound } from "../components/index";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={AppRoot}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </BrowserRouter>
    ) 
}

export default Routes;