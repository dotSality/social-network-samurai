import axios, {AxiosResponse} from 'axios';
import {UserType} from '../redux/users-reducer';
import {ProfileType} from '../Components/Profile/ProfileInfo/ProfileContainer';
import {SubmitDataType} from '../redux/auth-reducer';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'ecad3ae6-8083-4154-b722-6cea4b99f288'
    }
})

export const usersAPI: UsersAPIType = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<string,AxiosResponse<GetDataType>>
        (`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },
    getUserData(userID: number) {
        return instance.get<string,AxiosResponse<CommonResponseType<UserType>>>(`follow/${userID}`).then(res => res.data)
    },
    unfollowUserRequest(userID: number) {
        return instance.delete<string, AxiosResponse>(`follow/${userID}`)
    },
    followUserRequest(userID: number) {
        return instance.post<string, AxiosResponse>(`follow/${userID}`, {})
    },
}

export const authAPI: AuthAPIType = {
    isAuthRequest() {
        return instance.get<string,AxiosResponse<CommonResponseType<IsAuthResponseType>>>(`auth/me`).then(res => res.data)
    },
    userLogin(data: SubmitDataType) {
        return instance.post<SubmitDataType, AxiosResponse>(`auth/login`,data)
    },
    userLogout() {
        return instance.delete<string, AxiosResponse>(`auth/login`)
    },
}

export const profileAPI: ProfileAPIType = {
    getUserProfile(userId: string) {
        return instance.get<string,AxiosResponse<ProfileType>>(`profile/` + userId).then(res => res.data)
    },
    getUserStatus(userId: number) {
        return instance.get<string, AxiosResponse<string>>(`profile/status/${userId}`).then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put<string, AxiosResponse>(`profile/status`, { status })
    }
}

type ProfileAPIType = {
    getUserProfile: (userId: string) => Promise<ProfileType>,
    getUserStatus: (userId: number) => Promise<string>,
    updateStatus: (status: string) => Promise<AxiosResponse>,
}

type AuthAPIType = {
    isAuthRequest: () => Promise<CommonResponseType<IsAuthResponseType>>,
    userLogin: (data: SubmitDataType) => Promise<AxiosResponse>,
    userLogout: () => Promise<AxiosResponse>,
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

type CommonResponseType<T> = {
    data: T,
    messages: string[],
    fieldsErrors: string[],
    resultCode: number,
}

type UsersAPIType = {
    getUsers: (currentPage: number, pageSize: number) => Promise<GetDataType>,
    getUserData: (userID: number) => Promise<CommonResponseType<UserType>>,
    unfollowUserRequest: (userID: number) => Promise<AxiosResponse>,
    followUserRequest: (userID: number) => Promise<AxiosResponse>,
}
