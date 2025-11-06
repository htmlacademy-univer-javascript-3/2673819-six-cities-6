import {OfferProps} from '../../types/offer.ts';
import CommentForm from '../comment-form/comment-form.tsx';
import {CommentProps} from '../../types/comment.ts';
import Review from '../review/review.tsx';

type OfferCardProps = {
  offer: OfferProps;
  reviews: CommentProps[];
}

function Offer({offer, reviews}: OfferCardProps): JSX.Element {
  const {isPremium, images, price, isFavorite, rating, title, type, goods, host, bedrooms, maxAdults, description} = offer;

  return (
    <section className="offer">
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          {images.map((image: string): JSX.Element => (
            <div key={image} className="offer__image-wrapper">
              <img
                className="offer__image"
                src={image}
                alt="Photo studio"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="offer__container container">
        <div className="offer__wrapper">
          {isPremium &&
            <div className="offer__mark">
              <span>Premium</span>
            </div>}
          <div className="offer__name-wrapper">
            <h1 className="offer__name">
              {title}
            </h1>
            <button className="offer__bookmark-button button" type="button">
              <svg className="offer__bookmark-icon" width={31} height={33}>
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
            </button>
          </div>
          <div className="offer__rating rating">
            <div className="offer__stars rating__stars">
              <span style={{ width: `${(rating / 5) * 100}%` }} />
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="offer__rating-value rating__value">{rating}</span>
          </div>
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">{type}</li>
            <li className="offer__feature offer__feature--bedrooms">
              {bedrooms} Bedrooms
            </li>
            <li className="offer__feature offer__feature--adults">
              Max {maxAdults} adults
            </li>
          </ul>
          <div className="offer__price">
            <b className="offer__price-value">€{price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            <ul className="offer__inside-list">
              {goods.map((good: string): JSX.Element => (
                <li key={good} className="offer__inside-item">{good}</li>
              ))}
            </ul>
          </div>
          <div className="offer__host">
            <h2 className="offer__host-title">Meet the host</h2>
            <div className="offer__host-user user">
              <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                <img
                  className="offer__avatar user__avatar"
                  src={host.avatarUrl}
                  width={74}
                  height={74}
                  alt="Host avatar"
                />
              </div>
              <span className="offer__user-name">{host.name}</span>
              {host.isPro &&
                <span className="offer__user-status">Pro</span>}
            </div>
            <div className="offer__description">
              <p className="offer__text">{description}</p>
            </div>
          </div>
          <section className="offer__reviews reviews">
            <h2 className="reviews__title">
              Reviews · <span className="reviews__amount">1</span>
            </h2>
            <ul className="reviews__list">
              {reviews.map((review: CommentProps): JSX.Element => (
                <Review review={review} key={review.id} />
              ))}
            </ul>
            <CommentForm/>
          </section>
        </div>
      </div>
      <section className="offer__map map" />
    </section>
  );
}

export default Offer;
