import {combineReducers} from '@reduxjs/toolkit';
import {userProcess} from './user-process/user-process.ts';
import {settingProcess} from './setting-process/setting-process.ts';
import {offerProcess} from './offer-process/offer-process.ts';

export const reducer = combineReducers({
  'User': userProcess.reducer,
  'Setting' : settingProcess.reducer,
  'Offer' : offerProcess.reducer,
});
