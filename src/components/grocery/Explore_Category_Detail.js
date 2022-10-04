import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet, ScrollView, Image, Pressable, ToastAndroid } from 'react-native'
import { connect } from 'react-redux'
import types from './redux/types'

const CATS = [
    { id: 1, name: 'Fruits' },
    { id: 2, name: 'Vegtables' },
    { id: 3, name: 'Meat' },
    { id: 4, name: 'Fish' },
    { id: 5, name: 'Fruits' },
    { id: 6, name: 'Fruits' },
    { id: 7, name: 'Fruits' },
    { id: 8, name: 'Fruits' },
]

const REQUEST = '_REQUEST'
const Explore_Category_Detail = (props) => {
    const { navigation,
        route: { params: { id, name } },
        dispatch,
        groceryState: { categories, products } } = props;

    useEffect(() => {
        const sub = dispatch({ type: `${types.GET_CATEGORIES}${REQUEST}` })
        const pro = dispatch({ type: `${types.GET_PRODUCT_BY_CATEGORY_ID}${REQUEST}`, categoryId: id })
        return () => { sub, pro }

    }, [])
    // console.log(props);

    const [selected, setSelected] = useState(id);
    const [categoryName, setCategoryName] = useState(name);

    const onChangeCat = (id, name) => {
        setSelected(id);
        setCategoryName(name);
        // change products
        dispatch({ type: `${types.GET_PRODUCT_BY_CATEGORY_ID}${REQUEST}`, categoryId: id })
    }

    const addCart = (product) => {
        dispatch({
            type: `${types.SHOPPING_CART}${REQUEST}`,
            data: { product: product, type: types.CART_ITEM_INCREASE }
        })
        ToastAndroid.show('Add cart successfully!', ToastAndroid.SHORT);
    }
    return (
        <View style={styles.container}>
            <View style={styles.name}>
                <Text style={styles.nameText}>{categoryName}</Text>
            </View>
            <View style={styles.search}>
                <TextInput style={styles.searchText}
                    placeholder="Search"></TextInput>
            </View>
            <View style={{ marginLeft: 16 }}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ flexDirection: 'row', marginTop: 20 }}>
                    {
                        categories.map((item, index, arr) =>
                            <Text onPress={() => onChangeCat(item.id, item.name)} key={Math.random()}
                                style={[styles.categoriesText,
                                selected == item.id ? styles.bottomBorder : null]}>{item.name}</Text>
                        )
                    }
                </ScrollView>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}
                style={styles.categoriesContainer}>
                <View style={styles.scroll}>
                    {
                        products.map((item, index, arr) =>
                            <View style={styles.deal} key={Math.random()}>
                                <View style={styles.dealImg}>
                                    <Image style={styles.image} source={{uri: item.image}} />
                                </View>
                                <View style={styles.dealInfo}>
                                    <Text style={styles.dealName}>{item.name}</Text>
                                    <Text style={styles.dealWeight}>1kg</Text>
                                    <Text style={styles.dealPrice}>{`$ ${item.price}`}</Text>
                                </View>
                                <View style={styles.dealAdd}>
                                    <Pressable onPress={() => addCart(item)}>
                                        <Image source={require('../../resources/imgs/btnAdd.png')} />
                                    </Pressable>
                                </View>
                            </View>
                        )
                    }


                </View>
            </ScrollView>
        </View>

    )
}

const mapStateToProps = (state, props) => (
    {
        groceryState: state.GroceryReducer,
        props
    }
)

export default connect(mapStateToProps)(Explore_Category_Detail)

const styles = StyleSheet.create({
    image:{
        width: 70,
        height: 70,
        resizeMode: 'cover',
    },
    bottomBorder: {
        // backgroundColor: '#FF5E00',
        // borderTopLeftRadius: 2,
        // borderTopRightRadius: 2,
        borderBottomColor: '#FF5E00',
        borderBottomWidth: 2
    },
    categoriesText: {
        fontSize: 20,
        color: '#804F1E',
        marginRight: 20,
    },
    dealAdd: {
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    dealPrice: {
        color: '#FF5E00',
        fontSize: 20,
        fontWeight: '700',
        marginTop: 4
    },
    dealWeight: {
        color: '#929292',
        fontSize: 12,
        marginTop: 4
    },
    dealName: {
        color: '#6D3805',
        fontSize: 15,
        fontWeight: '700'
    },
    dealInfo: {
        paddingHorizontal: 16
    },
    dealImg: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25
    },
    deal: {
        width: '45%',
        height: 210,
        borderRadius: 20,
        // borderWidth: 0.1,
        // borderColor:'grey',
        paddingTop: 20,
        margin: 8,
        backgroundColor: 'white',
        elevation: 20,
        shadowColor: '#52006A',
        // marginBottom: 16
    },
    scroll: {
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    categoriesContainer: {
        flexDirection: 'column',
        marginTop: 20,
    },

    searchText: {
        width: "100%",
        height: 48,
        backgroundColor: '#F3F3F3',
        paddingLeft: 15,
        borderRadius: 7
    },
    search: {
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 18
    },
    nameText: {
        color: '#FF5E00',
        fontSize: 24,
        fontWeight: '700'
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