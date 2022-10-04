import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import {
    StyleSheet, Text, View, TextInput, Image,
    ScrollView
} from 'react-native'
import types from './redux/types';

const REQUEST = '_REQUEST';

const Shop = (props) => {
    const { dispatch, groceryState: { categories, popularDeals } } = props;
    useEffect(() => {
        const cats = dispatch({ type: `${types.GET_CATEGORIES}${REQUEST}`, payload: [] })
        const deals = dispatch({ type: `${types.GET_POPULAR_DEALS}${REQUEST}`, payload: [] })
        return () => { cats, deals }
    }, []);
    if(!categories || !popularDeals || categories.length == 0
        || popularDeals.length == 0) return(<></>)
    return (
        <View style={styles.container}>
            <View style={styles.name}>
                <Text style={styles.nameText}>Cửa hàng 247</Text>
            </View>
            <View style={styles.search}>
                <TextInput style={styles.searchText}
                    placeholder="Search" />
            </View>
            <View style={styles.title}>
                <Text style={styles.categories}>Categories</Text>
                <Text style={styles.seeAll}>See All</Text>
            </View>
            <View style={styles.scroll}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}
                    style={styles.categoriesContainer}>
                    {
                        categories.map((item, index, arr) => {
                            return (
                                <View style={styles.category} key={item.id}>
                                    <View style={styles.categoryImg}>
                                        <Image style={styles.categoriesImage} source={{ uri: item.image }} />
                                    </View>
                                    <Text style={styles.categoryName}>{item.name}</Text>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
            <View style={styles.title}>
                <Text style={styles.categories}>Popular Deals</Text>
                <Text style={styles.seeAll}>See All</Text>
            </View>
            <View style={styles.scroll}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}
                    style={styles.categoriesContainer}>
                    {
                        popularDeals.map((item, index, arr) =>
                            <View style={styles.deal} key={item.id}>
                                <View style={styles.dealImg}>
                                    <Image style={styles.dealsImage}
                                        source={{ uri: item.image }} />
                                </View>
                                <View style={styles.dealInfo}>
                                    <Text style={styles.dealName}>{item.name}</Text>
                                    <Text style={styles.dealWeight}>1kg</Text>
                                    <Text style={styles.dealPrice}>{`$${item.price}`}</Text>
                                </View>
                                <View style={styles.dealAdd}>
                                    <Image
                                        source={require('../../resources/imgs/add.png')} />
                                </View>
                            </View>
                        )
                    }
                </ScrollView>
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
export default connect(mapStateToProps)(Shop)

const styles = StyleSheet.create({
    dealsImage:{
        width: 60,
        height: 60, 
        resizeMode: 'cover'
    },
    categoriesImage: {
        width: 70,
        height: 70, 
        resizeMode: 'cover'
    },
    dealAdd: {
        position: 'absolute',
        bottom: 8,
        right: 8,
        flexWrap: 'wrap',
    },
    dealPrice: {
        color: '#FF5E00',
        fontSize: 20,
        fontWeight: '700',
        marginTop: 4,
    },
    dealWeight: {
        color: '#929292',
        fontSize: 12,
        marginTop: 4,
    },
    dealName: {
        color: '#6D3805',
        fontSize: 15,
        fontWeight: '700'
    },
    dealInfo: {
        paddingHorizontal: 16,
        marginTop: 22,
    },
    dealImg: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    deal: {
        width: 150,
        height: 190,
        borderRadius: 20,
        // shadowColor: '#C4C4C4',
        // shadowOpacity: 0.5,
        // borderWidth: 1,
        // borderColor: '#fafafa',
        backgroundColor: 'white',
        elevation: 20,
        margin: 4,
        shadowColor: '#52006A',
        padding: 8,
    },
    scroll: {
        flexDirection: 'row',
        paddingRight: 16,
    },
    categoryName: {
        color: '#6D3805',
        fontSize: 15,
    },
    categoryImg: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#EDD0FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    category: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    categoriesContainer: {
        marginTop: 32,
        marginHorizontal: 16,
        flex: 1,
    },
    seeAll: {
        color: '#FF5E00',
        fontSize: 18,
        paddingTop: 5
    },
    categories: {
        color: '#6D3805',
        fontSize: 22,
        fontWeight: '700',
    },
    title: {
        marginTop: 30,
        paddingLeft: 30,
        paddingRight: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    searchText: {
        width: '100%',
        height: 48,
        backgroundColor: '#F3F3F3',
        paddingLeft: 15,
        borderRadius: 7,
    },
    search: {
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 18,
    },
    nameText: {
        color: '#FF5E00',
        fontSize: 24,
        fontWeight: '700'
    },
    name: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        paddingTop: 48,
        backgroundColor: '#fff',
        flex: 1
    }
})
