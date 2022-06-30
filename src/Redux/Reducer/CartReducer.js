//Type
import { ADD_TO_CART, CLEAR_CHART, REDUCE_CART_ITEM, REMOVE_CART_ITEM } from '../ActionType'
//Helper
import { handleAddToCart, handleReduceCartItem, handleRemoveCartItem } from '../Helper';

const initialState = {
    cartItems: []
};

export const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ADD_TO_CART: return {
            ...state,
            cartItems: handleAddToCart({
                prevCartItems: state.cartItems,
                nextCartItem: payload
            })
        }

        case REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: handleRemoveCartItem({
                    prevCartItems: state.cartItems,
                    cartItemToRemove: payload
                })
            };

        case REDUCE_CART_ITEM:
            return {
                ...state,
                cartItems: handleReduceCartItem({
                    prevCartItems: state.cartItems,
                    cartItemToReduce: payload
                })
            };

        case CLEAR_CHART:
            return {
                ...state,cartItems:[]
            };

        default:
            return state;
    }
};