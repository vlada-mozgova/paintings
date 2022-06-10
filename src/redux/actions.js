import { BASKET_IN_OUT, HIDE_LOADER, SHOW_LOADER } from "./types";

export const basketInOut = ({ id, basket }) => {
    return {
        type: BASKET_IN_OUT,
        payload: { id, basket }
    }
}
export const showLoader = (id) => {
    return {
        type: SHOW_LOADER,
        payload: id
    }
}
export const hideLoader = (id) => {
    return {
        type: HIDE_LOADER,
        payload: id
    }
}
