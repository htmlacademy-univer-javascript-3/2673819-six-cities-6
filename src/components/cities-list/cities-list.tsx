import {Link} from 'react-router-dom';
import {setActiveCity} from '../../store/actions.ts';
import {CityProps} from '../../types/city.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';

type CitiesListProps = {
  cities: CityProps[];
}


function CitiesList({cities}: CitiesListProps) {
  const activeCity = useAppSelector((state) => state.activeCity);
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {cities &&
        cities.map((city) => (
          <li className="locations__item" key={city.name}>
            <Link to="#" className={city.name === activeCity.name ?
              'locations__item-link tabs__item' : 'locations__item-link tabs__item tabs__item--active'}
            onClick={() => {
              dispatch(setActiveCity(city));
            }}
            >
              <span>{city.name}</span>
            </Link>
          </li>
        ))}
    </ul>
  );
}

export default CitiesList;
