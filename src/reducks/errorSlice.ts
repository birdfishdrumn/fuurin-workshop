import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';

export const errorSlice = createSlice({
  name: 'error',
  initialState: {
    error:{
        state: false,

    }
  },
  reducers: {

     errorOpenAction: (state) => {
      // state.error.text = action.payload;
      state.error.state = true;

    },
    errorCloseAction:state=> {

      state.error.state = false;
    },


  },
});

export const {errorOpenAction,errorCloseAction} = errorSlice.actions;
// errorの中にerrorというオブジェクトが入っている。stateはinitialState,errorはname:"error"に該当する。
export const getErrorState = (state: RootState )=> state.error.error.state;

// export const geterrorText = (state: RootState )=> state.error.error.text;

// export const geterrorname = createSelector(
//   [selecterror],
//   state => state.errorname
// )

export default errorSlice.reducer
