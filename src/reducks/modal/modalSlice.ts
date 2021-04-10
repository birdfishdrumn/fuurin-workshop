import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';



export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modal:{
        state: false,

    }
  },
  reducers: {

     modalOpenAction: (state) => {
      // state.modal.text = action.payload;
      state.modal.state = true;
  // state.modal.text = "modal...";
    },
    modalCloseAction:state=> {

      state.modal.state = false;
  // state.modal.text = "";
    },


  },
});

export const {modalOpenAction,modalCloseAction} = modalSlice.actions;
// modalの中にmodalというオブジェクトが入っている。stateはinitialState,modalはname:"modal"に該当する。
export const getModalState = (state: RootState )=> state.modal.modal.state;


export default modalSlice.reducer
