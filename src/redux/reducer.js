import {
    SET_USER,
    SET_TOKEN
} from "../redux/action-types";

let initial = {
    user: null,
    token: null
};

const reducer = (state = initial, action) => {
    switch (action.type) {

        case SET_USER:
            return Object.assign({}, state, {user: action.user});
        case SET_TOKEN:
            return Object.assign({}, state, {token: action.token});
        default:
            return state;
    }
};

export default reducer;