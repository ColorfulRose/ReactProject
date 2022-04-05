import { PIC_PATH, RES_PATH } from '../contants/index'
import { combineReducers } from 'redux';

const defaultState = []
const selectPic = (state = defaultState, action) => {
    switch (action.type) {
        case PIC_PATH:
            return [...state, action.pic_path];
        default:
            return state;
    }
}
const defaultState2 = []
const showRes = (state = defaultState2, action) => {
    switch (action.type) {
        case RES_PATH:
            return [...state, action.res_path];
        default:
            return state;
    }
}
const rootReducer = combineReducers({
    selectPic,
    showRes
})
export default rootReducer