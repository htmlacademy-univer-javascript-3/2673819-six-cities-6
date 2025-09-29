type PlaceCardProps = {
  cardIsPremium:boolean;
  cardImage: string;
  cardPriceValue: number;
  cardStarsRating: number;
  cardTitle: string;
  cardType: string;
  cardIsFavorites: boolean;
}


function PlaceCard({cardIsPremium, cardImage, cardPriceValue, cardStarsRating, cardTitle, cardType, cardIsFavorites}: PlaceCardProps): JSX.Element {
  return (
    <article className="cities__card place-card">
      {cardIsPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={cardImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{cardPriceValue}</b>
            <span className="place-card__price-text"> /&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${cardIsFavorites ? 'place-card__bookmark-button--active' : ''} button`}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">{cardIsFavorites ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${(cardStarsRating / 5) * 100}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{cardTitle}</a>
        </h2>
        <p className="place-card__type">{cardType}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
