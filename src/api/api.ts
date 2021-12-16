import axios, {AxiosResponse} from 'axios';
import {UserType} from '../redux/users-reducer';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'ecad3ae6-8083-4154-b722-6cea4b99f288'
    }
})

export const usersAPI: UsersAPIType = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<GetResponseType<UserType[]>>
        (`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },
    getUserData(userID: number) {
        return instance.get<GetResponseType<UserType>>(`follow/${userID}`).then(res => res.data)
    },
    unfollowUserRequest(userID: number) {
        return instance.delete<CommonResponseType<{}>>(`follow/${userID}`)
    },
    followUserRequest(userID: number) {
        return instance.post<CommonResponseType<{}>>(`follow/${userID}`, {})
    }
}

type UsersAPIType = {
    getUsers: (currentPage: number, pageSize: number) => Promise<GetResponseType<UserType[]>>,
    getUserData: (userID: number) => Promise<GetResponseType<UserType>>,
    unfollowUserRequest: (userID: number) => Promise<AxiosResponse<CommonResponseType<{}>>>,
    followUserRequest: (userID: number) =>Promise<AxiosResponse<CommonResponseType<{}>>>,
}

type GetResponseType<T> = {
    error: number | null,
    items: T,
    totalCount: number,
}

type CommonResponseType<T> = {
    data: T,
    messages: string[],
    fieldsErrors: string[],
    resultCode: number,
}

// export const getUsers = (currentPage = 10, pageSize: number) => {
//     return instance.get<GetResponseType<UserType[]>>
//     (`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
// }
//
// export const getUserData = (userID: number) => {
//     return instance.get<GetResponseType<UserType>>(`follow/${userID}`).then(res => res.data)
// }
//
// export const unfollowUserRequest = (userID: number) => {
//     return instance.delete<CommonResponseType<{}>>(`follow/${userID}`)
// }
//
// export const followUserRequest = (userID: number) => {
//     return instance.post<CommonResponseType<{}>>(`follow/${userID}`, {})
// }