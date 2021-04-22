import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';

export const errorSlice = createSlice({
  name: 'error',
  initialState: {
    error: {
      state: false,
    },
  },
  reducers: {
    errorOpenAction: (state) => {
      state.error.state = true;
    },
    errorCloseAction: (state) => {
      state.error.state = false;
    },
  },
});

export const { errorOpenAction, errorCloseAction } = errorSlice.actions;
export const getErrorState = (state: RootState) => state.error.error.state;

export default errorSlice.reducer;
