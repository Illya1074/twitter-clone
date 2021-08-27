import {combineReducers} from 'redux';
import tweetsReducer from './tweetsReducer'
import userReducer from './userReducer'


const rootReducer = combineReducers({
    tweets: tweetsReducer,
    user: userReducer
});

export default rootReducer;
