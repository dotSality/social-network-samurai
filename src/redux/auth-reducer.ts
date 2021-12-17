import {Dispatch} from 'redux';
import {authAPI} from '../api/api';

const SET_USER_DATA = 'SET-USER-DATA'

const initialState = {
    id: 0,
    email: '',
    login: '',
    isAuth: false
}

type InitialStateType = typeof initialState

export const authReducer = (state = initialState, action: SetDataActionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true}
        default:
            return state;
    }
}

export const loginRequest = () => {
    return (dispatch: Dispatch) => {
        authAPI.isAuthRequest().then(response => {
                if (response.resultCode === 0) {
                    let {id, email, login} = response.data
                    dispatch(setAuthUserData(id, email, login))
                }
        })
    }
}

export const setAuthUserData = (id: number, email: string, login: string) => ({type: SET_USER_DATA, data: {id, email, login}} as const)
type SetDataActionType = ReturnType<typeof setAuthUserData>
