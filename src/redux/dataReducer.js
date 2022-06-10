import paintings from "../data/paintings.json";
import { BASKET_IN_OUT, HIDE_LOADER, SHOW_LOADER } from "./types";

const initialState = paintings

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case BASKET_IN_OUT: {
            const { id, basket } = action.payload
            return state.map(item => {
                if (item.id === id)
                    return { ...item, basket: !basket }
                return item
            })
        }
        case SHOW_LOADER:
            return state.map(item => {
                if (item.id === action.payload)
                    return { ...item, loading: true }
                return item
            })
        case HIDE_LOADER:
            return state.map(item => {
                if (item.id === action.payload)
                    return { ...item, loading: false }
                return item
            })
        default: return state
    }
}