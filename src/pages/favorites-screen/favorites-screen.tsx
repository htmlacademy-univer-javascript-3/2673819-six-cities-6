import {Link} from 'react-router-dom';
import PlaceCardList from '../../components/place-card-list/place-card-list.tsx';
import {useAppSelector} from '../../hooks';
import {cities} from '../../mocks/cities.ts';
import {useState} from 'react';
import {Header} from '../../components/header/header.tsx';
import {AppRoute} from '../../const.ts';

function FavoritesScreen(): JSX.Element {
  const favorites = useAppSelector((state) => state.Offer.favorites);
  const cityNameList = cities.map((city) => city.name);
  const [, setChosenId] = useState<string | null>(null);

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cityNameList.map((city) => (
                <li key={city} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <PlaceCardList
                    offers={favorites.filter((offer) => offer.city.name === city)}
                    isFavoriteList
                    setChosenId={setChosenId}
                  />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Root}>
          <img
            className="footer__logo"
            src="../../../markup/img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </Link>
      </footer>
    </div>

  );
}

export default FavoritesScreen;
