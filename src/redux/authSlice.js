// authSlice.js

import {createSlice} from '@reduxjs/toolkit';
import {loginUser, signupUser} from './authActions';

const initialState = {
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, action) {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        const {accessToken, refreshToken} = action.payload;
        state.isAuthenticated = true;
        state.accessToken = accessToken;
        state.refreshToken = refreshToken;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signupUser.pending, state => {
        (state.isLoading = true), (state.error = null);
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {setAuth} = authSlice.actions;
export default authSlice.reducer;
