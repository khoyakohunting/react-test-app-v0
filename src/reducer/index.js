import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import counter from './counter';
import redirect from './redirect';

const history = createBrowserHistory();

export default combineReducers({
    counter, redirect,
    router: connectRouter(history)
})