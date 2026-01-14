import {OfferPreviewProps} from '../../types/offer.ts';
import {changeStatusFavorite} from '../../store/api-actions.ts';
import {useAppDispatch} from '../../hooks';
import {addStatusFavorite} from '../../utils/add-status-favorite.ts';

export function NearPlaceCard ({offerPrev} : {offerPrev: OfferPreviewProps}): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <article className="near-places__card place-card">
      {offerPrev.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={offerPrev.previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offerPrev.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${offerPrev.isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
            type="button"
            onClick={() => {
              dispatch(changeStatusFavorite(addStatusFavorite({id: offerPrev.id, isFavorite: offerPrev.isFavorite})));
            }}
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">${offerPrev.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${offerPrev.rating * 100 / 5}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{offerPrev.title}</a>
        </h2>
        <p className="place-card__type">{offerPrev.type}</p>
      </div>
    </article>
  );
}
