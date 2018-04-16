import {
    SET_TOKEN,
    SET_USER,
} from "../redux/action-types";

let initialState = {
    user: null,
    token: null
};

export const setToken = (token) => ({type: SET_TOKEN, token});
export const setUser = (user) => ({type: SET_USER, user});
