import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

//components
import AppComponent from "./components/App.js";
ReactDOM.render(<Provider store={store}>
                <AppComponent />
                </Provider>,document.getElementById("main"));
