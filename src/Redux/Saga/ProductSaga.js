import { takeLatest, put, all, call } from 'redux-saga/effects';
//Redux
import { ADD_NEW_PRODUCT_START, DELETE_PRODUCT_START, FETCH_PRODUCTS_START, FETCH_PRODUCT_START } from '../ActionType'
import { setProducts, fetchProductsStart, setProduct } from '../Action';
//Firebase
import { auth } from '../../utils'
//Helper
import { handleAddProduct, handleDeleteProduct, handleFetchProduct, handleFetchProducts } from '../Helper'
//Toastify
import { toast } from 'react-toastify'
export const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));


export function* addProduct({ payload }) {
  try {
    toast.promise(resolveAfter3Sec, {
      pending: 'Please Wait',
      success: `Product Added`,
      error: 'Somthing Went Wrong 🤯'
    })
    const timestamp = new Date();
    yield handleAddProduct({
      ...payload,
      productAdminUserUID: auth.currentUser.uid,
      createdDate: timestamp
    });


    yield put(
      fetchProductsStart()
    );


  } catch (err) {
    toast.error(err);
  }

}

export function* onAddProductStart() {
  yield takeLatest(ADD_NEW_PRODUCT_START, addProduct);
}

export function* fetchProducts({ payload }) {
  try {
    const products = yield handleFetchProducts(payload);
    yield put(
      setProducts(products)
    );

  } catch (err) {
    toast.error(err);
  }
}

export function* onFetchProductsStart() {
  yield takeLatest(FETCH_PRODUCTS_START, fetchProducts);
}


export function* deleteProduct({ payload }) {
  try {
    yield handleDeleteProduct(payload);
    toast.promise(resolveAfter3Sec, {
      pending: 'Please Wait',
      success: `Product deleted`,
      error: 'Somthing Went Wrong 🤯'
    })
    yield put(
      fetchProductsStart()
    );

  } catch (err) {
    toast.error(err);
  }
}

export function* onDeleteProductStart() {
  yield takeLatest(DELETE_PRODUCT_START, deleteProduct);
}

export function* fetchProduct({ payload }) {
  try {
    const product = yield handleFetchProduct(payload);
    yield put(
      setProduct(product)
    );

  } catch (err) {
    toast.error(err);
  }
}


export function* onFetchProductStart() {
  yield takeLatest(FETCH_PRODUCT_START, fetchProduct);
}


export function* productsSagas() {
  yield all([
    call(onAddProductStart),
    call(onFetchProductsStart),
    call(onDeleteProductStart),
    call(onFetchProductStart),
  ])
}