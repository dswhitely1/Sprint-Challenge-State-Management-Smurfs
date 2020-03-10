import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';

import smurfStore from './smurfs/reducers';

const rootReducer = combineReducers({smurfStore});

const middleware = [logger];

const enhancers = applyMiddleware(...middleware);

export default createStore(rootReducer, composeWithDevTools(enhancers));