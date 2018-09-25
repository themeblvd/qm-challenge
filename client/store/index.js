import { createStore, applyMiddleware, combineReducers } from 'redux';
// import axios from 'axios';
import thunk from 'redux-thunk';

// Import and combine all reducers.
// Note: For this app, we obviously only have our one
// "sessions" reducer, but this structure could be built
// upon in the future.
import sessions from './sessions';

const reducer = combineReducers({
  sessions
});

let store;

if (process.env.NODE_ENV === 'development') {
  store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );
} else {
  store = createStore(reducer, applyMiddleware(thunk));
}

export default store;
