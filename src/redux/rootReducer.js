import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";
import { menuReducer } from "./menuReducer";

export const rootReducer = combineReducers({
    menu: menuReducer,
    data: dataReducer
})