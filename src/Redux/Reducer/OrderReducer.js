import {
    SET_USER_ORDER_HISOTRY,
    SET_ORDER_DETAILS
} from '../ActionType';

const initialState = {
    orderHistory: [],
    orderDetails: {},
};

export const ordersReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_USER_ORDER_HISOTRY:
            return {
                ...state,
                orderHistory: payload
            };
        case SET_ORDER_DETAILS:
            return {
                ...state,
                orderDetails: payload
            };
        default:
            return state;
    }
};


