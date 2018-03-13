// internal app notifications key
import * as rssParser from "react-native-rss-parser";

export const notificationKey = {
    LOGOUT: 'LOGOUT',
};

// api response codes
export const ResponseCode = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    UNPROCESSABLE_REQUEST: 422,
    INTERNAL_SERVER_ERROR: 500,
    TOKEN_INVALID: 503,
    NO_INTERNET: 522,
    BAD_GATEWAY: 502,
};

const rssFeedParse = (url) => {
    return fetch(url)
        .then((response) => response.text())
        .then((responseData) => rssParser.parse(responseData))
        .then((rss) => {
            return rss.items
        })
};

export default {
    rssFeedParse
}