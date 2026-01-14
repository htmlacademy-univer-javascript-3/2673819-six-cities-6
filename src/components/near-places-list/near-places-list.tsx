import {NearPlaceCard} from '../near-place-card/near-place-card.tsx';
import {useAppSelector} from '../../hooks';

export function NearPlacesList() {
  const nearOffers = useAppSelector((state) => state.Offer.nearbyOffer).slice(0, 3);

  return(
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">
          Other places in the neighbourhood
        </h2>
        <div className="near-places__list places__list">
          {nearOffers.map((offer) => (
            <NearPlaceCard key={offer.id} offerPrev={offer}/>
          ))}
        </div>
      </section>
    </div>
  );
}
