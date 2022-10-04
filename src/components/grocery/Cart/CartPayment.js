import React, {useState} from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { connect } from 'react-redux'
import types from '../redux/types';

const REQUEST = '_REQUEST'

const CartPayment = (props) => {
    const { navigation, dispatch, groceryState: { carts } } = props;
    const total = carts.reduce(
        (previous, current) => previous + current.quantity * current.product.price,
        0
    );
    const [tax, setTax] = useState(total * 0.1);
    const [delivery, setDelivery] = useState(5);

    const onCheckOut = () => {
        dispatch({
            type: `${types.CLEAR_SHOPPING_CART}${REQUEST}`,            
        })
        // navigation success
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.name}>
                <Text style={styles.nameText}>Payment</Text>
            </View>
            <View style={styles.orderSummary}>
                <View>
                    <Text style={styles.summary}>Order Summary</Text>
                </View>
                <View style={styles.item}>
                    <Text>Sub total</Text>
                    <Text>{`$ ${Math.round(total * 100) / 100}`}</Text>
                </View>
                <View style={styles.item}>
                    <Text>Tax price</Text>
                    <Text>{`$ ${Math.round(tax * 100) / 100}`}</Text>
                </View>
                <View style={styles.item}>
                    <Text>Delivery price</Text>
                    <Text>{`$ ${delivery}`}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.summary}>Total</Text>
                    <Text style={styles.summary}>{`$ ${Math.round((total + tax + delivery ) * 100) / 100}`}</Text>
                </View>
            </View>

            <View style={{ justifyContent: 'flex-end', margin: 20 }} >
                <Pressable 
                    onPress={onCheckOut} 
                    style={{ backgroundColor: '#FF5E00', borderRadius: 30 }}>
                    <Text style={{ fontSize: 22, textAlign: 'center', margin: 10, color: 'white', fontWeight: 'bold' }} >
                        {`CheckOut $${Math.round((total + tax + delivery) * 100) / 100}`}
                    </Text>
                </Pressable>
            </View>

        </View>
    )
}

const mapStateToProps = (state, props) => (
    {
        groceryState: state.GroceryReducer,
        props
    }
)

export default connect(mapStateToProps)(CartPayment)

const styles = StyleSheet.create({
    item:{
        marginVertical: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    summary:{
        color: '#6D3805',
        fontSize: 18,
        fontWeight: '700',
    },
    orderSummary:{
        width: '100%',
        height: 210,
        backgroundColor: '#FFF4E9',
        borderRadius: 20,
        padding: 16,
    },
    nameText: {
        color: '#FF5E00',
        fontSize: 24,
        fontWeight: '700',
        margin: 10
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 35,
        paddingHorizontal: 16,
    },
    name: {
        alignItems: 'center',
        justifyContent: 'center'
    },
})
