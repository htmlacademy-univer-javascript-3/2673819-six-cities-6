import {LocationProps} from './location.ts';
import {CityProps} from './city.ts';
import {UserProps} from './user.ts';

export type OfferProps = {
  id: string;
  title: string;
  description: string;
  type: 'hotel' | 'room' | 'apartment' | 'house';
  price: number;
  images: string[];
  city: CityProps;
  location: LocationProps;
  goods: string[];
  host: UserProps;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  bedrooms: number;
  maxAdults: number;
}

export type OfferPreviewProps = {
  id: string;
  title: string;
  type: 'hotel' | 'room' | 'apartment' | 'house';
  price: number;
  city: CityProps;
  location: LocationProps;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  previewImage: string;
}


