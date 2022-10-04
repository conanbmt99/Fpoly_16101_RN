
import React from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'

const Welcome = (props) => {
    const {navigation} = props;
    return (
        <View style={styles.container}>
            <Image style={styles.banner} 
                source={require('../../resources/imgs/banner.png')}/>
            <Pressable onPress={() => navigation.navigate('SignIn')} style={styles.signInContainer}>
                <Text style={styles.signIn}>Sign In</Text>
            </Pressable>
            <Pressable style={styles.signUpContainer}>
                <Text style={styles.signUp}>Sign Up</Text>
            </Pressable>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    signUp: {
        fontSize: 17,
        color: '#FF5E00'
    },
    signUpContainer: {
        borderColor: '#FF5E00',
        borderWidth: 2,
        height: 50,
        width: '100%',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 16,
    },
    signIn: {
        fontSize: 17,
        color: 'white'
    },
    signInContainer: {
        backgroundColor: '#FF5E00',
        height: 50,
        width: '100%',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 48,
    },
    banner: {
        width: '100%',
        height: 362,
        resizeMode: 'cover',
    },
    container:{
        padding: 16,
        flex: 1,
        height: '100%',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})
