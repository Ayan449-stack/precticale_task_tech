import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {userDetail} from './types';

const initialState: userDetail = {
  userList: [],
};

const userListSlice = createSlice({
  name: 'userList',
  initialState: initialState,
  reducers: {
    setUserList: (state, {payload}: PayloadAction<[]>) => {
      state.userList = payload;
    },

    clearListDetails: state => {
      state.userList = [];
    },
  },
});

export default userListSlice.reducer;
export const {
  actions: {setUserList, clearListDetails},
} = userListSlice;
