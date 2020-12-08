import { CHANGE_SUM } from './actionTypes';

export const changeSum = (value) => {
    return {
        type: CHANGE_SUM,
        payload: value
    }
}