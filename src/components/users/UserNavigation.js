

import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import Welcome from './Welcome';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const UserNavigation = (props) => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Welcome' component={Welcome}/>
            <Stack.Screen name='SignIn' component={SignIn}/>
            <Stack.Screen name='SignUp' component={SignUp}/>
        </Stack.Navigator>
    )
}

export default UserNavigation
