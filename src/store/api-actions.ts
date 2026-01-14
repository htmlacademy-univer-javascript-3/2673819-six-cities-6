import {createAsyncThunk} from '@reduxjs/toolkit';
import {OfferPreviewProps, OfferProps} from '../types/offer.ts';
import {AxiosInstance} from 'axios';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const.ts';
import {CommentProps} from '../types/comment.ts';
import {UserLoginProps, UserProps} from '../types/user.ts';
import {dropToken, saveToken} from '../services/token.ts';
import {AppDispatch, State} from '../types/state.ts';
import {redirectAction} from './actions.ts';


type TExtra = {
  extra: AxiosInstance;
  dispatch: AppDispatch;
}

export type TChangeFavorite = {
  offerId: OfferPreviewProps['id'];
  status: number;
}

export const fetchOffers = createAsyncThunk<OfferPreviewProps[], undefined, TExtra>(
  'offers/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferPreviewProps[]>(APIRoute.Offers);

    return data;
  }
);

export const fetchOffer = createAsyncThunk<OfferProps, OfferProps['id'], TExtra>(
  'offers/fetchOffer',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<OfferProps>(`${APIRoute.Offers}/${offerId}`);

    return data;
  }
);

export const fetchReviews = createAsyncThunk<CommentProps[], OfferProps['id'], TExtra>(
  'reviews/fetchReviews',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<CommentProps[]>(`${APIRoute.Reviews}/${offerId}`);

    return data;
  }
);

export const postReview = createAsyncThunk<CommentProps,
  {reviewData: CommentProps; offerId: OfferProps['id']}, TExtra>(
    'reviews/postReview',
    async ({reviewData, offerId}, {extra: api}) => {
      const {data} = await api.post<CommentProps>(`${APIRoute.Reviews}/${offerId}`, reviewData);

      return data;
    }
  );

export const fetchFavorites = createAsyncThunk<OfferPreviewProps[], undefined, TExtra>(
  'offers/fetchFavorites',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferPreviewProps[]>(APIRoute.Favorites);

    return data;
  }
);

export const fetchNearby = createAsyncThunk<OfferPreviewProps[], OfferProps['id'], TExtra>(
  'nearby/fetchNearby',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<OfferPreviewProps[]>(`${APIRoute.Offers}/${offerId}/nearby`);

    return data;
  }
);

export const changeStatusFavorite = createAsyncThunk<{data: OfferPreviewProps; status: number}, TChangeFavorite, TExtra>(
  'favorites/changeStatus',
  async ({offerId, status}, {dispatch, extra: api, getState}) => {
    const state = getState() as State;
    if (state.User.authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(redirectAction(AppRoute.Login));
    }
    const {data} = await api.post<OfferPreviewProps>(`${APIRoute.Favorites}/${offerId}/${status}`);

    return {data, status};
  }
);

export const checkAuthAction = createAsyncThunk<UserProps, undefined, TExtra>(
  'user/checkAuthAction',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserProps>(APIRoute.Login);

    return data;
  }
);

export const loginAction = createAsyncThunk<UserProps, UserLoginProps, TExtra>(
  'user/login',
  async (loginData, {dispatch, extra: api}) => {
    const {data} = await api.post<UserProps>(APIRoute.Login, loginData);
    saveToken(data.token);

    dispatch(redirectAction(AppRoute.Root));
    return data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, TExtra>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete<UserProps>(APIRoute.Login);
    dropToken();

    dispatch(redirectAction(AppRoute.Root));
  }
);
