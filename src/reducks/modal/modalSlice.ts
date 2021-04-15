import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modal:{
      state: false,
      text:"",
      type:""
    }
  },
  reducers: {

    modalOpenAction: (state,action) => {
      state.modal= action.payload
      state.modal.state = true;
    },
    modalCloseAction:state=> {
      state.modal.state = false;
    },


  },
});

export const {modalOpenAction,modalCloseAction} = modalSlice.actions;

export const getModalState = (state: RootState )=> state.modal.modal.state;
export const getModalType = (state: RootState )=> state.modal.modal.type;
export const getModalText = (state: RootState )=> state.modal.modal.text;

export default modalSlice.reducer
