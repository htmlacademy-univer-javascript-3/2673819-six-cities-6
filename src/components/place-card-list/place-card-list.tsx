import PlaceCard from '../place-card/place-card.tsx';
import {OfferProps} from '../../types/offer.ts';
import {useState} from 'react';

type OfferListProps = {
  offers: OfferProps[];
  isFavoriteList: boolean;
}

function PlaceCardList({offers, isFavoriteList}: OfferListProps): JSX.Element {
  const [chosenId, setChosenId] = useState<OfferProps['id'] | null>(null);

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
