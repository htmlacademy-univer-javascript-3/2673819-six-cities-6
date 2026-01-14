import PlaceCard from '../place-card/place-card.tsx';
import {OfferPreviewProps} from '../../types/offer.ts';

type OfferListProps = {
  offers: OfferPreviewProps[];
  isFavoriteList: boolean;
  setChosenId: (id: OfferPreviewProps['id'] | null) => void;
}

function PlaceCardList({offers, isFavoriteList, setChosenId}: OfferListProps): JSX.Element {
  return (
    <div className={isFavoriteList ? 'favorites__places' : 'cities__places-list places__list tabs__content'}>
      {offers.map((offer) => (
        <PlaceCard offer={offer}
          onMouseEnter={() => setChosenId(offer.id)}
          onMouseLeave={() => setChosenId(null)}
          key={offer.id}
          isFavoriteList={isFavoriteList}
        />
      ))}
    </div>
  );
}
export default PlaceCardList;
