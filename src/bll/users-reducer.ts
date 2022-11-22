import { usersAPI } from '../api/usersAPI';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setAppError, setAppStatus } from './app-reducer';
import { changeFriendsCount } from './sidebar-reducer';
import { Nullable } from './profile-reducer';

type PhotosType = {
  small: string | null
  large: string | null
}

export type FetchUsersDataType = {
  count: number;
  page: number;
  term: string;
  friend: Nullable<boolean>;
}

export type UserType = {
  name: string,
  id: number,
  uniqueUrlName: string | null,
  photos: PhotosType,
  status: string | null,
  followed: boolean,
}

const slice = createSlice({
  name: 'users',
  initialState: {
    users: [] as UserType[],
    isFetching: false,
    totalUsersCount: 0,
    isFollowing: [] as number[]
  },
  reducers: {
    followToggle(state, action: PayloadAction<number>) {
      const user = state.users.find(u => u.id === action.payload);
      if (user) user.followed = !user.followed;
    },
    toggleIsFollowingProgress(state, action: PayloadAction<{ isFetching: boolean, userID: number }>) {
      state.isFollowing = action.payload.isFetching
        ? [...state.isFollowing, action.payload.userID]
        : state.isFollowing.filter(id => id !== action.payload.userID);
    },
    clearUsersData() {
      return {
        users: [],
        totalUsersCount: 0,
        isFetching: false,
        isFollowing: [],
      };
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.isFetching = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        const { isFetching, users, totalUsersCount } = action.payload;
        state.users = users;
        state.isFetching = isFetching;
        state.totalUsersCount = totalUsersCount;
      });
  }
});

export const usersReducer = slice.reducer;
export const { followToggle, toggleIsFollowingProgress, clearUsersData } = slice.actions;

export const fetchUsers = createAsyncThunk('users/requestUsers',
  async ({ currentPage, pageSize, term }: { currentPage: number, pageSize: number, term: string }, { dispatch, rejectWithValue }) => {
    try {
      let res = await usersAPI.getUsers(currentPage, pageSize, term);
      dispatch(setAppError(null));
      return { users: res.items, totalUsersCount: res.totalCount, isFetching: false };
    } catch (e: any) {
      dispatch(setAppStatus('failed'));
      dispatch(setAppError(e.message));
      return rejectWithValue({});
    }
  });

export const toggleFollow = createAsyncThunk('users/toggleFollow',
  async ({ userID, isFollowed }: { userID: number, isFollowed: boolean }, { dispatch }) => {
    try {
      dispatch(toggleIsFollowingProgress({ isFetching: true, userID }));
      if (isFollowed) {
        let unfollowRes = await usersAPI.unfollowUserRequest(userID);
        if (unfollowRes.data.resultCode === 0) {
          dispatch(followToggle(userID));
          dispatch(changeFriendsCount(-1));
        }
      } else {
        let followRes = await usersAPI.followUserRequest(userID);
        if (followRes.data.resultCode === 0) {
          dispatch(followToggle(userID));
          dispatch(changeFriendsCount(+1));
        }
      }
      dispatch(toggleIsFollowingProgress({ isFetching: false, userID }));
      dispatch(setAppError(null));
    } catch (e: any) {
      dispatch(setAppError(e.message));
    }
  });
