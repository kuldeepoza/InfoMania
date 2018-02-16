import validate from "validate.js";
import {ErrorMessage} from "./message";

let constraints = {
    email: {
        presence: {
            message: ErrorMessage.emailBlank
        },
        format: {
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: ErrorMessage.emailValidity,
        }
    },
    password: {
        presence: {
            message: ErrorMessage.pwdBlank
        },
        length: {
            minimum: 6,
            message: ErrorMessage.pwdLength,
        }
    },
    name: {
        presence: {
            message: ErrorMessage.nameBlank
        },
    },
    number: {
        presence: {
            message: ErrorMessage.numBlank
        },
        length: {
            minimum: 8,
            maximum:8,
            message: ErrorMessage.numLength,
        }
    },
};

export function validation(fieldName, value) {
    let formValues = {};
    formValues[fieldName] = value === '' ? null : value;

    let formFields = {};
    formFields[fieldName] = constraints[fieldName];

    let result = validate(formValues, formFields, {fullMessages: false});

    if (result) {
        return result[fieldName][0]
    }
    return null
}
