import {AxiosResponse} from 'axios';
import {UserType} from '../bll/users-reducer';
import {instance} from './instance';

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

type GetDataType = {
    error: number,
    items: UserType[],
    totalCount: number
}

export type CommonResponseType<T = {}> = {
    data: T,
    messages: string[],
    fieldsErrors: string[],
    resultCode: number,
}
