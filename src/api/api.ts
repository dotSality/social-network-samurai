import axios, {AxiosResponse} from 'axios';
import {UserType} from '../redux/users-reducer';
import {ContactsType, ProfileType} from '../Components/Profile/ProfileInfo/ProfileContainer';
import {SubmitDataType} from '../redux/auth-reducer';
import {ProfileDataType} from '../Components/Profile/ProfileInfo/ProfileDataForm/ProfileDataForm';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'ecad3ae6-8083-4154-b722-6cea4b99f288'
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<string, AxiosResponse<GetDataType>>
        (`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },
    getUserData(userID: number) {
        return instance.get<AxiosResponse<CommonResponseType<UserType>>>(`follow/${userID}`).then(res => res.data)
    },
    unfollowUserRequest(userID: number) {
        return instance.delete<CommonResponseType>(`follow/${userID}`)
    },
    followUserRequest(userID: number) {
        return instance.post<CommonResponseType>(`follow/${userID}`, {})
    },
}

export const authAPI = {
    isAuthRequest() {
        return instance.get<CommonResponseType<IsAuthResponseType>>(`auth/me`).then(res => res.data)
    },
    userLogin(data: SubmitDataType) {
        return instance.post<SubmitDataType, CommonResponseType>(`auth/login`, data)
    },
    userLogout() {
        return instance.delete<CommonResponseType>(`auth/login`)
    },
    captchaRequest() {
        return instance.get<CommonResponseType<{ url: string }>>('security/get-captcha-url')
    }
}

export const profileAPI = {
    getUserProfile(userId: number) {
        return instance.get<ProfileType>(`profile/` + userId).then(res => res.data)
    },
    getUserStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`).then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put<CommonResponseType>(`profile/status`, {status})
    },
    uploadPhoto(file: File) {
        let formData = new FormData()
        formData.append('image', file)
        return instance.put<CommonResponseType<PhotosType>>(`profile/photo`, formData, {
            headers: {'Content-Type': 'multipart/form-data'}
        }).then(res => res.data)
    },
    submitProfile(profile: ProfileDataType) {
        return instance.put<CommonResponseType>(`profile`, profile).then(res => res.data)
    }
}

type IsAuthResponseType = {
    email: string,
    id: number,
    login: string,
}

type GetDataType = {
    error: number,
    items: UserType[],
    totalCount: number
}

type PhotosType = {
    photos: {
        small: string
        large: string
    }
}

type CommonResponseType<T = {}> = {
    data: T,
    messages: string[],
    fieldsErrors: string[],
    resultCode: number,
}
