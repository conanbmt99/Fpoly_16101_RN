import React, {useState} from 'react'
import { View, Text, StyleSheet, Image, Pressable, TextInput } from 'react-native'
import { connect } from 'react-redux';
import types from './redux/types';

const REQUEST = '_REQUEST';
const SignIn = (props) => {
    const { dispatch, navigation } = props;
    const [username, setUsername] = useState('admin');
    const [password, setPassword] = useState('123');
    const onSignIn = () => {
        dispatch({ type: `${types.SIGN_IN}${REQUEST}`, data: {username, password} })
    }
    return (
        <View style={styles.container}>
            <Image style={styles.banner}
                source={require('../../resources/imgs/signin.png')} />

            <TextInput 
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                placeholder='Username'/>
            <TextInput 
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder='Password' secureTextEntry/>
            
            <Pressable onPress={onSignIn} style={styles.signInContainer}>
                <Text style={styles.signIn}>Sign In</Text>
            </Pressable>
            
        </View>
    )
}

const mapStateToProps = (state, props) => (
    {
        userState: state.UserReducer,
        props
    }
)
export default connect(mapStateToProps)(SignIn)



const styles = StyleSheet.create({
    input:{
        backgroundColor: '#F3F3F3',
        width: '100%',
        height: 48,
        paddingHorizontal: 27,
        paddingVertical: 14,
        borderRadius: 5,
        marginVertical: 8
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
