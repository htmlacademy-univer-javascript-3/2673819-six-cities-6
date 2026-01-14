import {useAppSelector} from '../../hooks';
import PlaceCardList from '../../components/place-card-list/place-card-list.tsx';
import CitiesList from '../../components/cities-list/cities-list.tsx';
import {useState} from 'react';
import Map from '../../components/map/map.tsx';
import {SortingOptions} from '../../components/sorting-options/sorting-options.tsx';
import {cities} from '../../mocks/cities.ts';
import {Header} from '../../components/header/header.tsx';

function MainScreen(): JSX.Element {
  const offers = useAppSelector((state) => state.Offer.offers) ?? [];
  const activeCity = useAppSelector((state) => state.Offer.activeCity);
  const [chosenId, setChosenId] = useState<string | null>(null);
  const offersByCity = offers.filter((offer) => offer.city.name === activeCity.name);
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={cities}/>
          </section>
        </div>
        <div className="cities">
          {offersByCity.length === 0 && (
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in {activeCity.name}</p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>
          )}
          {offersByCity.length > 0 && (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersByCity.length} places to stay in {activeCity.name}</b>
                <SortingOptions/>
                {offersByCity && offersByCity.length > 0 &&
                  <PlaceCardList offers={offersByCity} setChosenId={setChosenId} isFavoriteList={false}/>}
              </section>
              <div className="cities__right-section">
                {offersByCity.length > 0 && (
                  <Map
                    chosenId={chosenId}
                    city={activeCity}
                    offers={offersByCity}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>

  );
}

export default MainScreen;
