import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {singleUserDetail} from './types';

const initialState: singleUserDetail = {
  userDetails: {},
};

const userDetailSlice = createSlice({
  name: 'singleUserList',
  initialState: initialState,
  reducers: {
    setSingleUserDetail: (state, {payload}: PayloadAction<[]>) => {
      state.userDetails = payload;
    },

    clearSingleUserDetails: state => {
      state.userDetails = {};
    },
  },
});

export default userDetailSlice.reducer;
export const {
  actions: {setSingleUserDetail, clearSingleUserDetails},
} = userDetailSlice;
