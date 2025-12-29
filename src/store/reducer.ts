import {createReducer} from '@reduxjs/toolkit';
import {fetchOffers, fetchOffer, fetchNearPlaces, fetchReviews, fetchFavorites, dropOffer, setActiveCity} from './actions.ts';
import {offers} from '../mocks/offers.ts';
import {CityProps} from '../types/city.ts';
import {OfferProps} from '../types/offer.ts';
import {CommentProps} from '../types/comment.ts';
import {comments} from '../mocks/comments.ts';

const initialState: {
  activeCity: CityProps;
  offers: OfferProps[] | null;
  nearPlaces: OfferProps[];
  offer: OfferProps | null;
  favorites: OfferProps[];
  reviews: CommentProps[];
} = {
  activeCity: {
    'name': 'Paris',
    'location': {
      'latitude': 48.85661,
      'longitude': 2.351499,
      'zoom': 13
    }
  },
  offers: offers,
  nearPlaces: [],
  offer: null,
  favorites: [],
  reviews: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers, (state) => {
      state.offers = offers;
    })
    .addCase(fetchOffer, (state, action) => {
      state.offer = offers.find((offer) => offer.id === action.payload) ?? null;
    })
    .addCase(fetchNearPlaces, (state, action) => {
      state.nearPlaces = offers.filter((offer) => offer.id !== action.payload);
    })
    .addCase(fetchReviews, (state) => {
      state.reviews = comments;
    })
    .addCase(fetchFavorites, (state) => {
      state.favorites = offers.filter((offer) => offer.isFavorite);
    })
    .addCase(dropOffer, (state) => {
      state.offers = null;
      state.nearPlaces = [];
    })
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    });
});

export {reducer};
