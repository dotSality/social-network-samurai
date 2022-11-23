export const postFieldValidator = {
    required: 'You can\'t post an empty post',
    maxLength: {
        value: 10,
        message: 'Max length is 300 characters',
    },
}

export const captchaFieldValidator = {
    required: 'Wrong captcha'
}

