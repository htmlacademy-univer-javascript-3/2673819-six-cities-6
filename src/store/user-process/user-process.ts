import {AuthorizationStatus} from '../../const.ts';
import {UserProps} from '../../types/user.ts';
import {createSlice} from '@reduxjs/toolkit';
import {checkAuthAction, loginAction, logoutAction} from '../api-actions.ts';

export type TInitialState = {
  authorizationStatus: AuthorizationStatus;
  user: {
    email: UserProps['email'] | null;
    avatarUrl: UserProps['avatarUrl'] | null ;
  };
}

const initialState: TInitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: {
    email: null,
    avatarUrl: null,
  }
};

export const userProcess = createSlice({
  name: 'User',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user.email = action.payload.email;
        state.user.avatarUrl = action.payload.avatarUrl;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user.email = action.payload.email;
        state.user.avatarUrl = action.payload.avatarUrl;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = {
          email: null,
          avatarUrl: null,
        };
      });
  }
});
