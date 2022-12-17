/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

require("./bootstrap");
require("./routes/Web");
import ReactDOM from "react-dom";
import React from "react";
import Web from "./routes/Web";
import store from "./store";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <Web />
            </React.StrictMode>
        </BrowserRouter>
    </Provider>,
    document.getElementById("app")
);
