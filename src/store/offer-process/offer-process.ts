import {CityProps} from '../../types/city.ts';
import {OfferPreviewProps, OfferProps} from '../../types/offer.ts';
import {CommentProps} from '../../types/comment.ts';
import {cities} from '../../mocks/cities.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  changeStatusFavorite,
  fetchFavorites, fetchNearby,
  fetchOffer,
  fetchOffers,
  fetchReviews,
  postReview
} from '../api-actions.ts';


export type TInitialState = {
  activeCity: CityProps;
  offers: OfferPreviewProps[];
  offer: OfferProps | null;
  nearbyOffer: OfferPreviewProps[];
  favorites: OfferPreviewProps[];
  comments: CommentProps[];
}

const initialState: TInitialState = {
  activeCity: cities[0],
  offers: [],
  offer: null,
  nearbyOffer: [],
  favorites: [],
  comments: [],
};

export const offerProcess = createSlice({
  name: 'Offer',
  initialState,
  reducers: {
    setOffer(state, action: PayloadAction<OfferProps | null>) {
      state.offer = action.payload;
    },
    setComments(state, action: PayloadAction<CommentProps[]>) {
      state.comments = action.payload;
    },
    setNearBy(state, action: PayloadAction<OfferPreviewProps[]>) {
      state.nearbyOffer = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.offer = action.payload;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.comments.push(action.payload);
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })
      .addCase(fetchNearby.fulfilled, (state, action) => {
        state.nearbyOffer = action.payload;
      })
      .addCase(changeStatusFavorite.fulfilled, (state, action) => {
        if (action.payload.status === 1) {
          state.favorites.push(action.payload.data);
        } else {
          state.favorites = state.favorites.filter((favorite) => favorite.id !== action.payload.data.id);
        }
      });
  }
});

export const {setOffer, setNearBy, setComments} = offerProcess.actions;
