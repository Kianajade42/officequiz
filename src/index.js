import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import "./assets/style.css";
import App from "./App";
import Quiz from "./quiz"

const store = createStore(Quiz, applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
