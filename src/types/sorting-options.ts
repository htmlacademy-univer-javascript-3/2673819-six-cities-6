import {SortingOptionVariants} from '../const.ts';

export type SortingOptionsProps = typeof SortingOptionVariants[keyof typeof SortingOptionVariants];
