import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Nullable} from './profile-reducer';

const slice = createSlice({
    name: 'form',
    initialState: {
        error: null as string | null,
        editMode: false
    },
    reducers: {
        setFormError(state, action: PayloadAction<Nullable<string>>) {
            state.error = action.payload
        },
        setEditMode(state, action: PayloadAction<boolean>) {
            state.editMode = action.payload
        }
    }
})

export const formReducer = slice.reducer
export const {setEditMode, setFormError} = slice.actions
