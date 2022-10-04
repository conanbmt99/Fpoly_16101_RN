
import {call, put, takeLatest} from 'redux-saga/effects';
import types from './types';
import actions from './actions';
import { getAPI } from '../../../utilities/axios';


function* getCategories(params) {
    const data = yield getAPI("/api/categories");
    yield put(actions.getCategories(data.categories));
}

function* getPopularDeals(params) {
    const data = yield getAPI("/api/products");
    yield put(actions.getPopularDeals(data.products));
}

function* shoppingCart(params) {
    yield put(actions.shoppingCart(params));
}

function* categorySearching(params) {
    const {keyword} = params;
    let data;
    if(!keyword || keyword.trim().length == 0) {
        data = yield getAPI("/api/categories");
    } else{
        data = yield getAPI(`/api/categories/${keyword}/searching`);
    }
    yield put(actions.categorySearching(data.categories));
}

function* getProductsByCategoryId(params) {
    yield put(actions.clearProductsByCategoryId());
    const {categoryId} = params;
    const data = yield getAPI(`/api/products/${categoryId}/categoryId`);
    yield put(actions.getProductsByCategoryId(data.products));
}

function* clearShoppingCart(params) {
    yield put(actions.clearShoppingCart(params));
}


const REQUEST = '_REQUEST';

function* grocerySaga() {
    yield takeLatest(`${types.GET_CATEGORIES}${REQUEST}`, getCategories);
    yield takeLatest(`${types.GET_POPULAR_DEALS}${REQUEST}`, getPopularDeals);
    yield takeLatest(`${types.SHOPPING_CART}${REQUEST}`, shoppingCart);
    yield takeLatest(`${types.CATEGORY_SEARCHING}${REQUEST}`, categorySearching);
    yield takeLatest(`${types.GET_PRODUCT_BY_CATEGORY_ID}${REQUEST}`, getProductsByCategoryId);
    yield takeLatest(`${types.CLEAR_SHOPPING_CART}${REQUEST}`, clearShoppingCart);
}

export default grocerySaga;

