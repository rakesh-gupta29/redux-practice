import { takeLatest, put, all, call } from 'redux-saga/effects';
import {

} from '../ActionType';
import {
    handleSaveOrder, handleGetUserOrderHistory,
    handleGetOrder
} from '../Helper';
import { auth } from '../../utils';
import { clearCart } from '../Action';
import { setUserOrderHistory, setOrderDetails } from '../Action';







export  function* ordersSagas() {
    yield all([
        // call(onSaveOrderHistoryStart),
        // call(onGetUserOrderHistoryStart),
        // call(onGetOrderDetailsStart),
    ])
}
