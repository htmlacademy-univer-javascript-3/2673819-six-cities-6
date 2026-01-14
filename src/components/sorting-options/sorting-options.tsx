import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {SortingOptionVariants} from '../../const.ts';
import {changeSorting} from '../../store/setting-process/setting-process.ts';

export function SortingOptions() {
  const [open, setOpen] = useState<boolean>(false);
  const sortingOptions = Object.values(SortingOptionVariants);
  const currentOption = useAppSelector((state) => state.Setting.sortingOption);
  const dispatch = useAppDispatch();
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentOption}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${open ? 'places__options--opened' : ''}`}>
        {sortingOptions.map((option) => (
          <li
            key={option}
            className={`places__option ${option === currentOption ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => {
              dispatch(changeSorting(option));
              setOpen((prevState) => !prevState);
            }}
          >
            {option}
          </li>
        ))}
        <li
          className="places__option places__option--active"
          tabIndex={0}
        >
          Popular
        </li>
        <li className="places__option" tabIndex={0}>
          Price: low to high
        </li>
        <li className="places__option" tabIndex={0}>
          Price: high to low
        </li>
        <li className="places__option" tabIndex={0}>
          Top rated first
        </li>
      </ul>
    </form>
  );
}
