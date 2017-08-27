import {combineReducers,createStore} from 'redux';
import {handleAnimAction} from "./reducers";

const reducers = combineReducers(
    {
        animState: handleAnimAction
    }
);
export default store = createStore(reducers);