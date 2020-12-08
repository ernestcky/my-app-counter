import { CHANGE_SIZE, CHANGE_SUM } from "./actionTypes";
import { combineReducers } from "redux";

const sum = (state = 0, action) => {
    if (action.type === CHANGE_SUM) {
        return state + action.payload;
    }
    return state;
}

const size = (state = 0, action) => {
    if (action.type === CHANGE_SIZE) {
        return action.payload;
    }
    return state;
}

export default combineReducers(
    {
        sum,
        size
    }
)