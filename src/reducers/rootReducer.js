import { combineReducers } from "redux";
import getReducer from "./getReducer";

const rootReducer = combineReducers({
    capsuleDetails : getReducer
});

export default rootReducer;