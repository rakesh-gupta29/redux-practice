import {
  ADD_NEW_PRODUCT_START,
  DELETE_PRODUCT_START,
  FETCH_PRODUCTS_START,
  FETCH_PRODUCT_START,
  SET_PRODUCT,
  SET_PRODUCTS
} from '../ActionType'

export const addProductStart = (payload) => ({
  type: ADD_NEW_PRODUCT_START,
  payload
});

export const fetchProductsStart = () => ({
  type: FETCH_PRODUCTS_START,
});

export const setProducts = (payload) => ({
  type: SET_PRODUCTS,
  payload
});

export const deleteProductStart = (payload) => ({
  type: DELETE_PRODUCT_START,
  payload
});

export const fetchProductStart = (payload) => ({
  type: FETCH_PRODUCT_START,
  payload
});

export const setProduct = (payload) => ({
  type: SET_PRODUCT,
  payload
});