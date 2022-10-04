
import types from "./types";

const getCategories = (data) => {
    return {
        type: types.GET_CATEGORIES,
        payload: data
    };
};

const getPopularDeals = (data) => {
    return {
        type: types.GET_POPULAR_DEALS,
        payload: data
    };
};

const shoppingCart = (params) => {
    return {
        type: types.SHOPPING_CART,
        payload: params.data
    };
};

const categorySearching = (data) => {
    return {
        type: types.CATEGORY_SEARCHING,
        payload: data
    };
};

const getProductsByCategoryId = (data) => {
    return {
        type: types.GET_PRODUCT_BY_CATEGORY_ID,
        payload: data
    };
};

const clearProductsByCategoryId = (data) => {
    return {
        type: types.CLEAR_PRODUCT_BY_CATEGORY_ID,
        payload: data
    };
};

const clearShoppingCart = (data) => {
    return {
        type: types.CLEAR_SHOPPING_CART,
        payload: data
    };
};


export default {
    getCategories,
    getPopularDeals,
    shoppingCart, 
    categorySearching,
    getProductsByCategoryId,
    clearProductsByCategoryId,
    clearShoppingCart,
}