import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../store';
import { useDispatch } from "react-redux";
import {user} from "../../types/user"


// const dispatch = useDispatch()


// export const FETCH_POSTS_IN_FAVORITE = "FETCH_POSTS_IN_FAVORITE"
// export const fetchPostsInFavoriteAction = (posts) => {
//   return {
//     type: "FETCH_POSTS_IN_FAVORITE",
//     payload: posts
//   }

// counterのスライス、storeの情報と、reducerを持っている。
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      uid: "",
      avatar: "",
      username: "",
      isSignedIn: false,
      profile: "",
      url:"",
      role: "",
      email: "",
      name: "",

    },
    like: {
      likes: []
    },
    error:false
  },
  reducers: {
    //  actionsに相当する箇所　actionとpayloadが統合している。
    login: (state, action) => {
      state.user = action.payload;
      state.user.isSignedIn = true
    },

    logout: state => {
      state.user = { uid: "", avatar: "", username: "", isSignedIn: false, role: "", email: "", name: "",profile:"",url:""}
    },
    updateUserAction: (state, action) => {
      state.user = action.payload;
      state.user.isSignedIn = true
    },
    fetchPostsInFavoriteAction: (state, action:PayloadAction<string[]>) => {

      state.like.likes = [...action.payload]
    },
    openError: state => {
      state.error = true
    },
        closeError: state => {
      state.error = true
    }
  },
});

export const { login, logout,fetchPostsInFavoriteAction,openError,closeError,updateUserAction} = userSlice.actions;
// userの中にuserというオブジェクトが入っている。stateはinitialState,userはname:"user"に該当する。

export const selectUser = (state: RootState )=> state.user.user;
export const getUsername = (state: RootState) => state.user.user.username;
export const getIsSignedIn = (state: RootState) => state.user.user.isSignedIn;
export const getUserAvatar = (state: RootState) => state.user.user.avatar;
export const getUserId = (state: RootState) => state.user.user.uid;
export const getEmail = (state: RootState) => state.user.user.email;
export const getPostsInFavorite = (state: RootState) => state.user.like.likes
export const getUserProfile = (state: RootState) => state.user.user.profile
export const getUserUrl= (state: RootState) => state.user.user.url
export const getRoute = (state: RootState) => state.router
export const getError = (state: RootState) => state.user.error


// export const getUsername = createSelector(
//   [selectUser],
//   state => state.username
// )

export default userSlice.reducer
