import React, { useEffect, useState } from 'react'
import {
    View, Text, TextInput, StyleSheet, ScrollView, Image,
    Pressable
} from 'react-native'
import { connect } from 'react-redux'
import types from './redux/types'

const REQUEST = '_REQUEST'

const Explore_Categories = (props) => {
    const { navigation,
        dispatch,
        groceryState: { categories } } = props;

    useEffect(() => {
        const sub = dispatch({ type: `${types.GET_CATEGORIES}${REQUEST}` })
        return () => { sub }
    }, [])

    const [search, setSearch] = useState('');

    const onSearch = (keyword) => {
        setSearch(keyword);
        dispatch({ type: `${types.CATEGORY_SEARCHING}${REQUEST}`, keyword: keyword })
    }

    console.log(categories);

    if (!categories) return (<></>)
    return (
        <View style={styles.container}>
            <View style={styles.name}>
                <Text style={styles.nameText}>Categories</Text>
            </View>
            <View style={styles.search}>
                <TextInput style={styles.searchText}
                    value={search}
                    onChangeText={onSearch}
                    placeholder="Search" />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.categoriesContainer}>
                <View style={styles.scroll}>
                    {
                        categories.map((item, index, arr) =>
                            <Pressable style={styles.category} key={Math.random()}
                                onPress={() => navigation.navigate('Explore_Category_Detail', {id: item.id, name: item.name})}>
                                <View style={styles.categoryImg}>
                                    <Image style={styles.image} source={{uri: item.image}} />
                                </View>
                                <Text style={styles.categoryName}>{item.name}</Text>
                            </Pressable>
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

export default connect(mapStateToProps)(Explore_Categories)

const styles = StyleSheet.create({
    image:{
        width: 70,
        height: 70,
        resizeMode: 'cover',
    },
    categoryName: {
        marginTop: 20,
        marginBottom: 20
    },
    categoryImg: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#EDD0FF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    category: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '29%',
        marginHorizontal: 8,
    },
    scroll: {
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    categoriesContainer: {
        flexDirection: 'column',
        marginTop: 32,
        marginLeft: 10,
        flexWrap: 'wrap'
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

