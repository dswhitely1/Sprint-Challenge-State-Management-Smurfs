import React from "react";
import ReactDOM from "react-dom";

import {Provider} from 'react-redux';
import store from './store';

import {BrowserRouter as Router} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import App from "./components/App";

ReactDOM.render(<Provider store={store}><Router><App/></Router></Provider>, document.getElementById("root"));
