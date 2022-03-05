import {SubmitDataType} from '../bll/auth-reducer';
import {AxiosResponse} from 'axios';
import {CommonResponseType} from './usersAPI';
import {instance} from './instance';

export const authAPI = {
    isAuthRequest() {
        return instance.get<CommonResponseType<IsAuthResponseType>>(`auth/me`).then(res => res.data)
    },
    userLogin(data: SubmitDataType) {
        return instance.post<SubmitDataType, AxiosResponse<CommonResponseType>>(`auth/login`, data).then(res => res.data)
    },
    userLogout() {
        return instance.delete<CommonResponseType>(`auth/login`)
    },
    captchaRequest() {
        return instance.get<{ url: string }>('security/get-captcha-url')
    }
}

type IsAuthResponseType = {
    email: string,
    id: number,
    login: string,
}