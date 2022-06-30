import { ADD_TO_CART, CLEAR_CHART, REDUCE_CART_ITEM, REMOVE_CART_ITEM } from "../ActionType";

export const addProduct = (payload) => ({
  type: ADD_TO_CART,
  payload
});

export const removeCartItem = (payload) => ({
  type: REMOVE_CART_ITEM,
  payload
});

export const reduceCartItem = (payload) => ({
  type: REDUCE_CART_ITEM,
  payload
});

export const clearCart = (payload) => ({
  type: CLEAR_CHART,
  payload
});
