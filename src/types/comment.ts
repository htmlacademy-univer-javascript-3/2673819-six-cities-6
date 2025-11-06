import {UserProps} from './user.ts';

export type CommentProps = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: UserProps;
}
