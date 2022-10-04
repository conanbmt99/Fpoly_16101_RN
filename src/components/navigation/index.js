import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import UserNavigation from '../users/UserNavigation';
import GroceryNavigation from '../grocery/GroceryNavigation';
import { connect } from 'react-redux';

const index = (props) => {
    const { userState: { id } } = props;
    return (
        <NavigationContainer>
            {
                id ? <GroceryNavigation /> : <UserNavigation />
            }             
        </NavigationContainer>
    )
}

const mapStateToProps = (state, props) => (
    {
        userState: state.UserReducer,
        props
    }
)
export default connect(mapStateToProps)(index)