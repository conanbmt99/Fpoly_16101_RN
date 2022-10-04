import React from 'react';
import {Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Shop from './Shop'
import { ExploreNavigation } from './ExploreNavigation';
import { CartNavigation } from './CartNavigation'
import Favorite from './Favorite'
import Account from './Account'

const Tab = createBottomTabNavigator();

const GroceryNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Shop') {
                        if (focused) {
                            return <Image source={require('../../resources/imgs/shop.png')}/>
                        } else {
                            return <Image source={require('../../resources/imgs/shop_focused.png')}/>
                        }
                    } else if (route.name === 'Explore') {
                        if (focused) {
                            return <Image source={require('../../resources/imgs/search_focused.png')}/>
                        } else {
                            return <Image source={require('../../resources/imgs/search.png')}/>
                        }
                    } else if (route.name === 'Cart') {
                        if (focused) {
                            return <Image source={require('../../resources/imgs/cart_focused.png')}/>
                        } else {
                            return <Image source={require('../../resources/imgs/cart.png')}/>
                        }
                    } else if (route.name === 'Favorite') {
                        if (focused) {
                            return <Image source={require('../../resources/imgs/heart_focused.png')}/>
                        } else {
                            return <Image source={require('../../resources/imgs/heart.png')}/>
                        }
                    } else {
                        if (focused) {
                            return <Image source={require('../../resources/imgs/user_focused.png')}/>
                        } else {
                            return <Image source={require('../../resources/imgs/user.png')}/>
                        }
                    }
                },
                tabBarActiveTintColor: '#FF5E00',
                tabBarInactiveTintColor: '#6D3805',
                headerShown: false
            })}
        >
            <Tab.Screen name='Shop' component={Shop} />
            <Tab.Screen name='Explore' component={ExploreNavigation} />
            <Tab.Screen name='Cart' component={CartNavigation} />
            <Tab.Screen name='Favorite' component={Favorite} />
            <Tab.Screen name='Account' component={Account} />
        </Tab.Navigator>
    )
}

export default GroceryNavigation
