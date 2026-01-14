import {setActiveCity} from '../../store/actions.ts';
import {CityProps} from '../../types/city.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {AppRoute} from '../../const.ts';

type CitiesListProps = {
  cities: CityProps[];
}


function CitiesList({cities}: CitiesListProps) {
  const activeCity = useAppSelector((state) => state.Offer.activeCity);
  const dispatch = useAppDispatch();
  const handleCity = (city: CityProps) => {
    dispatch(setActiveCity(city));
  };

  return (
    <ul className="locations__list tabs__list">
      {cities &&
        cities.map((city) => (
          <li className="locations__item" key={city.name}>
            <a className={city.name === activeCity.name ?
              'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
            onClick={(e) => {
              e.preventDefault();
              handleCity(city);
            }}
            href={AppRoute.Root}
            >
              <span>{city.name}</span>
            </a>
          </li>
        ))}
    </ul>
  );
}

export default CitiesList;
