import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';

export const dialogSlice = createSlice({
  name: 'dialog',
  initialState: {
    dialog: {
      title:"",
      state: false,
      type:""
    }
  },
  reducers: {

     dialogOpenAction: (state,action) => {
      state.dialog = action.payload;
      state.dialog.state = true;
    },
    dialogCloseAction:state=> {
      state.dialog.state = false;
    },
  },
});

export const {dialogOpenAction,dialogCloseAction} = dialogSlice.actions;
export const getDialogState = (state: RootState) => state.dialog.dialog.state;
export const getDialogTitle = (state: RootState )=> state.dialog.dialog.title;
export const getDialogType = (state: RootState )=> state.dialog.dialog.type;

export default dialogSlice.reducer
