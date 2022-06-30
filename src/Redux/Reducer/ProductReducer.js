import {
    FETCH_PRODUCTS_START,
    SET_PRODUCT,
    SET_PRODUCTS
} from '../ActionType'

const initialState = {
    products: [],
    product: {},
};


export const productsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_PRODUCTS: return { ...state, products: payload }
        case SET_PRODUCT:
            return {
                ...state,
                product: payload
            }
        default:
            return state;
    }
};