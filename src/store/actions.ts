import {createAction} from '@reduxjs/toolkit';
import {CityProps} from '../types/city.ts';
import {OfferProps} from '../types/offer.ts';

export const fetchOffers = createAction<OfferProps[]>('offers/fetchOffers');
export const fetchOffer = createAction<OfferProps['id']>('offer/fetchOffer');
export const fetchNearPlaces = createAction<OfferProps['id']>('nearPlaces/fetchNearPlaces');
export const fetchReviews = createAction<OfferProps['id']>('reviews/fetchReviews');
export const fetchFavorites = createAction<OfferProps['id']>('favorites/fetchFavorites');
export const dropOffer = createAction('offer/dropOffer');
export const setActiveCity = createAction<CityProps>('offers/setActiveCity');
