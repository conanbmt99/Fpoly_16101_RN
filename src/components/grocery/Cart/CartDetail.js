import React ,{ useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, ScrollView, Image, Pressable,  } from 'react-native'
import { connect } from 'react-redux'
import types from '../redux/types';

const REQUEST = '_REQUEST'

const CartDetail = (props) => {
    const { navigation, dispatch, groceryState: { carts } } = props

    const onChangeQuantity = (product, type) => {
        dispatch({
            type: `${types.SHOPPING_CART}${REQUEST}`,
            data: { product, type }
        })
    }
    return (
        <View style={styles.container} >
            <View style={styles.name}>
                <Text style={styles.nameText}>Cart</Text>
            </View>
            <ScrollView >
                {
                    carts.map((item, index, arr) =>
                        <View style={styles.rowContainer} key={Math.random()}>
                            <View style={styles.rowLeftContainer} >
                                <Image style={styles.leftImg} source={{ uri: item.product.image }} />
                            </View>
                            <View style={styles.rowRightContainer}>
                                <Text style={styles.itemName}> {item.product.name}</Text>
                                <View style={styles.itemAction}>
                                    <Pressable 
                                        onPress={() => onChangeQuantity(item.product, types.CART_ITEM_DECREASE)}
                                    >
                                        <Image source={require('../../../resources/imgs/btn_decr.png')} />
                                    </Pressable>
                                    <TextInput style={{ width: 25, textAlign: 'center' }} >{item.quantity}</TextInput>
                                    <Pressable 
                                        onPress={() => onChangeQuantity(item.product, types.CART_ITEM_INCREASE)}
                                    >
                                        <Image source={require('../../../resources/imgs/btn_incr.png')} />
                                    </Pressable>
                                </View>
                                <Pressable style={styles.itemRemove} >
                                    <Text style={styles.remove}>Remove</Text>
                                </Pressable>
                                <Text style={styles.itemPrice}>
                                    {`$${item.product.price} kg`}
                                </Text>
                            </View>
                        </View>
                    )
                }
            </ScrollView>
            <View style={{ justifyContent: 'flex-end', margin: 20 }} >
                <Pressable onPress={() => navigation.navigate('CartPayment')} style={{ backgroundColor: '#FF5E00', borderRadius: 30 }}>
                    <Text style={{ fontSize: 22, textAlign: 'center', margin: 10, color: 'white', fontWeight: 'bold' }} >
                        CheckOut
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

export default connect(mapStateToProps)(CartDetail)

const styles = StyleSheet.create({
    remove: {
        fontSize: 12,
        color: '#A42B32'
    },
    itemRemove: {
        position: 'absolute',
        top: 8,
        right: 4,
    },
    itemPrice: {
        fontSize: 20,
        color: '#6D3805',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    itemAction: {
        flexDirection: 'row',
        backgroundColor: '#F4F4F4',
        width: 85,
        borderRadius: 20,
        // alignSelf: 'center', 
        marginLeft: 16
    },
    itemName: { fontSize: 18, color: '#6D3805', fontWeight: 'bold', margin: 10 },
    rowRightContainer: {
        flex: 3,
    },
    leftImg: {
        width: 56,
        height: 61,
        resizeMode: 'cover',
    },
    rowLeftContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,

    },
    rowContainer: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 0.3,
        borderColor: 'lightgray',
        width: '100%'
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
        paddingTop: 35
    },
    name: {
        alignItems: 'center',
        justifyContent: 'center'
    },
})