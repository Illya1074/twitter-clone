import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducer';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState } from './localStorage'

const loadLocalStorage = {user:loadState()} || {}
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

// const enhancers = compose(
//     (typeof window !== 'undefined' && window.devToolsExtension) ? window.devToolsExtension() : f => f
// );
const store = createStore(rootReducer,loadLocalStorage,composedEnhancer);

export default store;
