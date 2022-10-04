import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Cart from './Cart' 

const Stack = createStackNavigator();

export const CartNavigation = (props) => {   
    const {CartDetail, CartPayment, CartSuccess}  = Cart
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen component={CartDetail} name={'CartDetail'} />
            <Stack.Screen component={CartPayment} name={'CartPayment'} />
            <Stack.Screen component={CartSuccess} name={'CartSuccess'} />
        </Stack.Navigator>
    )
}