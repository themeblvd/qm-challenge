import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import sessions from './sessions';

const reducer = combineReducers({
  sessions // Could expand to multiple reducers.
});

let store;

if (process.env.NODE_ENV === 'development') {
  // Allow Redux Chrome dev tools in dev mode.
  store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );
} else {
  store = createStore(reducer, applyMiddleware(thunk));
}

export default store;
