import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Explore_Categories from './Explore_Categories';
import Explore_Category_Detail from './Explore_Category_Detail';

const Stack = createStackNavigator();

export const ExploreNavigation = (props) => {    
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen component={Explore_Categories} name={'Explore_Categories'} />
            <Stack.Screen component={Explore_Category_Detail} name={'Explore_Category_Detail'} />
        </Stack.Navigator>
    )
}