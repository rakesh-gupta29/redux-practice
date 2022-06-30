import { createStore, applyMiddleware } from "redux";
import {root} from "../Reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import saga from 'redux-saga'
import Logger from 'redux-logger'
import thunk from 'redux-thunk'
import { rootSaga } from '../Saga'
import { persistStore } from 'redux-persist';

const sagaMiddleware = saga()

export const middleware = [thunk, sagaMiddleware, Logger]

export const store = createStore(root, composeWithDevTools(applyMiddleware(...middleware)))
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default {
    store,
    persistor
  };
  
