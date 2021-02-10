import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootreducer';

let composeEnhancers = compose;

if (process.env.NODE_ENV !== 'production') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}


export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
