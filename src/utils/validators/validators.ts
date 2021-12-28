type TextareaValidatorType = {
    required: string,
    maxLength: {
        value: number,
        message: string,
    }
}

export const postFieldValidator: TextareaValidatorType = {
    required: 'You can\'t post an empty post',
    maxLength: {
        value: 10,
        message: 'Max length is 300 characters',
    },
}

export const emailFieldValidatorType = {
    required: 'Please, enter your e-mail',
    pattern: {
        value: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
        message: 'Incorrect e-mail'
    }
}

export const passwordFieldValidatorType = {
    required: 'Please, enter password',
    minLength: {
        value: 6,
        message: 'Incorrect password format'
    }
}
