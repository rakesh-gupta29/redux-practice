import { all, call } from 'redux-saga/effects';
import { userSagas } from './userSaga'
import { productsSagas } from './ProductSaga'
import { ordersSagas } from './OrderSaga'



export function* rootSaga() {
  yield all([
    call(userSagas),
    call(productsSagas),
    call(ordersSagas)
  ])
}
