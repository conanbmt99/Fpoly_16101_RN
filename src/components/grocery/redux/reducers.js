

import types from "./types";

const initialState = {
    categories: [],
    popularDeals: [],
    carts: [],
    products: [],
}
// carts = [
//     {product: {}, quantity: 1}
// ]

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_CATEGORIES:
            const categories = action.payload
            return {
                ...state,
                categories
            }
        case types.GET_POPULAR_DEALS:
            const popularDeals = action.payload
            return {
                ...state,
                popularDeals
            }
        case types.SHOPPING_CART:
            const {product, type} = action.payload;
            let c = state.carts;
            const check = c.filter(i => i.product?.id == product.id)[0]; 
            if (type == types.CART_ITEM_INCREASE) { 
                if (check) {                    
                    c = c.map(i => {
                        if (i.product.id == product.id ) {
                            i = {...i, quantity: i.quantity + 1}
                        }
                        return i;
                    })
                } else {
                    c = [...c, {quantity: 1, product }]
                }
            } else { 
                if(check.quantity == 1){
                    c = c.filter(i => i.product.id != product.id);    
                } else {
                    c = c.map(i => {
                        if (i.product.id == product.id ) {
                            i.quantity -=1
                        }
                        return i;
                    })
                }                
            }
            return {
                ...state,
                carts: c
            }
        case types.CATEGORY_SEARCHING:
            const category_searching_result = action.payload
            return {
                ...state,
                categories: category_searching_result
            }
        case types.GET_PRODUCT_BY_CATEGORY_ID:
            const get_product_by_category_id_result = action.payload
            return {
                ...state,
                products: get_product_by_category_id_result
            }
        case types.CLEAR_PRODUCT_BY_CATEGORY_ID:            
            return {
                ...state,
                products: []
            }
        case types.CLEAR_SHOPPING_CART:            
            return {
                ...state,
                carts: []
            }
        default:
            return state;
    }
}

export default reducer;