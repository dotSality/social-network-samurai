import {ThunkType} from './redux-store';

const initState = {
    error: null as string | null,
    editMode: false
}

type InitStateType = typeof initState

export const formReducer = (state = initState, action: FormActionType): InitStateType => {
    switch (action.type) {
        case 'form/SET-ERROR':
            return {...state, error: action.error}
        case 'form/SET-EDIT-MODE':
            return {...state, editMode: action.isEditMode}
        default:
            return state;
    }
}

export const setFormError = (error: string | null) => ({type: 'form/SET-ERROR', error} as const)
export const setEditMode = (isEditMode: boolean) => ({type: 'form/SET-EDIT-MODE', isEditMode} as const)

export const onEditMode = (): ThunkType => async (dispatch) => {
    dispatch(setEditMode(true))
}

export type FormActionType = ReturnType<typeof setFormError>
    | ReturnType<typeof setEditMode>