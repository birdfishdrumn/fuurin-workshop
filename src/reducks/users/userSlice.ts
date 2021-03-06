import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      uid: '',
      avatar: '',
      username: '',
      isSignedIn: false,
      profile: '',
      url: '',
      role: '',
      email: '',
      name: '',
      twitter: '',
      instagram: '',
    },
    like: {
      likes: [],
    },
  },
  reducers: {
    //  actionsに相当する箇所　actionとpayloadが統合している。
    login: (state, action) => {
      state.user = action.payload;
      state.user.isSignedIn = true;
    },
    logout: (state) => {
      state.user = {
        uid: '',
        avatar: '',
        username: '',
        isSignedIn: false,
        role: '',
        email: '',
        name: '',
        profile: '',
        url: '',
        twitter: '',
        instagram: '',
      };
    },
    updateUserAction: (state, action) => {
      state.user = action.payload;
      state.user.isSignedIn = true;
    },
    fetchPostsInFavoriteAction: (state, action: PayloadAction<string[]>) => {
      state.like.likes = [...action.payload];
    },
  },
});

export const { login, logout, fetchPostsInFavoriteAction, updateUserAction } = userSlice.actions;
// userの中にuserというオブジェクトが入っている。stateはinitialState,userはname:"user"に該当する。

export const selectUser = (state: RootState) => state.user.user;
export const getUsername = (state: RootState) => state.user.user.username;
export const getIsSignedIn = (state: RootState) => state.user.user.isSignedIn;
export const getUserAvatar = (state: RootState) => state.user.user.avatar;
export const getUserId = (state: RootState) => state.user.user.uid;
export const getEmail = (state: RootState) => state.user.user.email;
export const getPostsInFavorite = (state: RootState) => state.user.like.likes;
export const getUserProfile = (state: RootState) => state.user.user.profile;
export const getUserUrl = (state: RootState) => state.user.user.url;
export const getUserTwitter = (state: RootState) => state.user.user.twitter;
export const getUserInstagram = (state: RootState) => state.user.user.instagram;
export const getRoute = (state: RootState) => state.router;

export default userSlice.reducer;
