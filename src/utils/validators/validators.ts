export const postFieldValidator = {
    required: 'You can\'t post an empty post',
    maxLength: {
        value: 10,
        message: 'Max length is 300 characters',
    },
}

export const emailFieldValidator = {
    required: 'Please, enter e-mail',
    pattern: {
        value: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
        message: 'Incorrect e-mail'
    }
}

export const passwordFieldValidator = {
    required: 'Please, enter password',
}

export const captchaFieldValidator = {
    required: 'Wrong captcha'
}

