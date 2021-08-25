import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
 import { createStore, applyMiddleware} from 'redux';
 import thunk from 'redux-thunk';
 import quizReducer from './store/reducers/reducer'
import "./assets/style.css";
//import configureStore from './store/configureStore';
import App from "./App";




const store = createStore (quizReducer, applyMiddleware(thunk))
 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
    </React.StrictMode>,
document.getElementById('root')
)
