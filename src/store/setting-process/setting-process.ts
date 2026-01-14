import {SortingOptionsProps} from '../../types/sorting-options.ts';
import {SortingOptionVariants} from '../../const.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type TInitialState = {
  sortingOption: SortingOptionsProps;
};

const initialState: TInitialState = {
  sortingOption: SortingOptionVariants.POPULAR,
};

export const settingProcess = createSlice({
  name: 'Setting',
  initialState,
  reducers: {
    changeSorting(state, action: PayloadAction<SortingOptionsProps>) {
      state.sortingOption = action.payload;
    },
  },
});

export const {changeSorting} = settingProcess.actions;
