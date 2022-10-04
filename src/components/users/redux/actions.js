
import types from "./types";

const signUp = (data) => {
    return {
        type: types.SIGN_UP,
        payload: data
    };
};

const signIn = (data) => {
    return {
        type: types.SIGN_IN,
        payload: data
    };
};

export default {
    signIn,
    signUp
}