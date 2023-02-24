import itemsReducer from "./todoReducers";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    itemsReducer
})

export default rootReducers;