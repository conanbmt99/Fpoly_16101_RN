import React from 'react';
import store from './src/redux/stores';
import { Provider } from 'react-redux';
import Navigation from './src/components/navigation'
import { api } from './server';

api();

export default function App() {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}

/**
 * USERS:
 *  - id, name, email, password, dob, 
 *  - address: 
 *  [
 *    {id, detail},
 *    {id, detail}
 *  ]
 * - favorite: 
 * [
 *  {id, name, price, img},
 *  {id, name, price, img}
 * ]
 * - carts: 
 * [
 *  cart: {
 *    id, time, status, 
 *    products: 
 *    [
 *      
 *    ]
 *  }
 * ]
 * 
 * 
 * PRODUCTS:
 * 
 * CATS: 
 *  -id, name,
 *  -products: 
 *  [
 *    {}
 *  ]
 * 
 * 
 * SHOPPING_CARTS:
 *  id, time, status, 
 *    products: 
 *    [
 *      id, name, price, quantity
 *    ]
 * 
 * 
 */