import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from './reducer';
import { BrowserRouter,Route } from "react-router-dom";

const store=createStore(reducer);
ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Route component={App} />
       </BrowserRouter>
    </Provider>,document.getElementById('root')
);  