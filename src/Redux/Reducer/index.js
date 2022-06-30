import { combineReducers } from "redux";
//Persist
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//Reducer
import {userReducer} from './UserReducer'
import {productsReducer} from './ProductReducer'
import {cartReducer} from './CartReducer'
import {ordersReducer} from './OrderReducer'

export const rootReducer = combineReducers({
    userReducer,
    productsReducer,
    cartReducer,
    ordersReducer
})

const configStorage = {
    key: 'root', 
    storage,
    whitelist: ['cartReducer']
  };
  
  export const root =  persistReducer(configStorage, rootReducer);
  
