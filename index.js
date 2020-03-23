import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import Reducer from './store/reducer';
import thunk from 'redux-thunk';
const logger = (store) =>{
    return next=> {
        return action =>{
            console.log('[Midleware] Dispatching',action);
            const result = next(action);
            console.log("next state",store.getState());
            return result;
        }
    }
};
const store = createStore(Reducer,applyMiddleware(logger,thunk));
ReactDOM.render(<Provider store = {store}><App/></Provider>,document.getElementById("root"));
