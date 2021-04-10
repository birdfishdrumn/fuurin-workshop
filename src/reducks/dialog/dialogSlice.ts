import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';



export const dialogSlice = createSlice({
  name: 'dialog',
  initialState: {
    dialog: {
      title:"",
      state: false,
      typeState:false,
      type:""
    }
  },
  reducers: {

     dialogOpenAction: (state,action) => {
      state.dialog = action.payload;

      state.dialog.state = true;

    },
    dialogStateChangeAction: (state,action) => {
      state.dialog.typeState = action.payload;
        state.dialog.title = action.payload;

    },
    dialogCloseAction:state=> {

      state.dialog.state = false;
  // state.dialog.text = "";
    },


  },
});

export const {dialogOpenAction,dialogCloseAction,dialogStateChangeAction} = dialogSlice.actions;
// dialogの中にdialogというオブジェクトが入っている。stateはinitialState,dialogはname:"dialog"に該当する。
export const getDialogState = (state: RootState) => state.dialog.dialog.state;
export const getDialogTitle = (state: RootState )=> state.dialog.dialog.title;
export const getDialogType = (state: RootState )=> state.dialog.dialog.type;
export const getDialogTypeState = (state: RootState )=> state.dialog.dialog.typeState;
export default dialogSlice.reducer
