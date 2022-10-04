

import types from "./types";

const initialState = {
    id: null,
    username: null,
    name: null,
    // favorites: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SIGN_IN:
            const users = action.payload
            const {id, username, name} = users[0]
            return {
                ...state,
                id, username, name
            }
        default:
            return state;
    }
}

export default reducer;