import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { usersAPI } from '../api/usersAPI';
import { UserType } from './users-reducer';
import { setAppError, setAppStatus } from './app-reducer';
import { spliceFriends } from '../utils/spliceFriends/spliceFriends';
import { Nullable } from './profile-reducer';

const slice = createSlice({
  name: 'sidebar',
  initialState: {
    friends: [] as UserType[],
    totalFriendsCount: null as Nullable<number>,
  },
  reducers: {
    clearFriendsData(state) {
      state.friends = [];
    },
    changeFriendsCount(state, action: PayloadAction<Nullable<number>>) {
      if (state.totalFriendsCount && action.payload) {
        state.totalFriendsCount += action.payload;
      } else {
        state.totalFriendsCount = action.payload;
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchFriends.fulfilled, (state, action) => {
        state.friends = action.payload.friends;
        state.totalFriendsCount = action.payload.totalFriendsCount;
      });
  }
});

export const sidebarReducer = slice.reducer;
export const { clearFriendsData, changeFriendsCount } = slice.actions;

export const fetchFriends = createAsyncThunk('sidebar/fetchFriends',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setAppStatus('loading'));
      const pageSize = 10;
      let res = await usersAPI.getUsers(1, pageSize, '', true);
      const totalFriendsCount = res.totalCount;
      let page = Math.floor(Math.random() * (totalFriendsCount / pageSize));
      let { items } = await usersAPI.getUsers(page || 1, pageSize, '', true);
      const friends = spliceFriends(items);
      return { friends, totalFriendsCount };
    } catch (e: any) {
      dispatch(setAppStatus('failed'));
      dispatch(setAppError(e.message));
      return rejectWithValue({});
    }
  });