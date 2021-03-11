import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {createStore} from "redux"
import {todoApp} from "./reducers/todoApp"
import {useDispatch} from "react-redux";

let store  = createStore(todoApp);

ReactDOM.render(<App todos = {store.getState().todos} />, document.getElementById("root"));
