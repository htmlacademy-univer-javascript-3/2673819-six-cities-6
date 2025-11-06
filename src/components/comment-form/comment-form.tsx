import {Fragment} from 'react';
type RatingStarsProps ={
  rating: number;
}

const titleStars = {
  5: 'perfect',
  4: 'good',
  3: 'not bad',
  2: 'badly',
  1: 'terribly',
} as const;

export function RatingStars({rating}: RatingStarsProps): JSX.Element {
  const starId: string = `${rating}-stars`;
  const title: string = titleStars[rating as keyof typeof titleStars];
  return (
    <Fragment>
      <input className="form__rating-input visually-hidden" name="rating" value={rating} id={starId} type="radio"/>
      <label htmlFor={starId} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </Fragment>
  );
}

function CommentForm(): JSX.Element {
  const starsValue: number[] = [5, 4, 3, 2, 1];
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {starsValue.map((rating): JSX.Element => (RatingStars({rating})))}
      </div>
      <textarea
        className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit">Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;
