import {createAction} from '@reduxjs/toolkit';
import {CityProps} from '../types/city.ts';
import {AppRoute} from '../const.ts';

export const redirectAction = createAction<AppRoute>('redirect');
export const setActiveCity = createAction<CityProps>('offers/setActiveCity');
