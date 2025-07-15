import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from './types';

const initialState: IUser = {
  token: null,
  username: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (
      state,
      {payload}: PayloadAction<{token: string | null; username: string | null}>,
    ) => {
      state.token = payload.token;
      state.username = payload.username;
    },
    setUserToken: (state, {payload}: PayloadAction<string | null>) => {
      state.token = payload;
    },
    clearUserData: state => {
      state.token = null;
      state.username = null;
    },
  },
});

export default userSlice.reducer;
export const {
  actions: {setUserData, setUserToken, clearUserData},
} = userSlice;
