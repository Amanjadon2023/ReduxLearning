// this file is for importing all reducers here

import { changeTheNumber } from "./updown";
import { getTheme } from "./theme";
import { combineReducers } from "redux";
export const mainReducer = combineReducers({
    changeTheNumber,
    getTheme
})