import Logo from '../logo/logo.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import {logoutAction} from '../../store/api-actions.ts';

export function Header() {
  const user = useAppSelector((state) => state.User.user);
  const authStatus = useAppSelector((state) => state.User.authorizationStatus);
  const favoritesCount = useAppSelector((state) => state.Offer.favorites.length);
  const dispatch = useAppDispatch();

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link
                  to={AppRoute.Favorites}
                  className="header__nav-link header__nav-link--profile"
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__user-name user__name">{user.email}
                  </span>
                  <span className="header__favorite-count">{favoritesCount}</span>
                </Link>
              </li>
              <li className="header__nav-item">
                { authStatus === AuthorizationStatus.Auth ?
                  <Link
                    to={AppRoute.Root}
                    className="header__nav-link"
                    onClick={() => {
                      dispatch(logoutAction);
                    }}
                  >
                    <span className="header__signout">Sign out</span>
                  </Link> :
                  <Link
                    to={AppRoute.Login}
                    className="header__nav-link header__nav-link--profile"
                  >
                    <span className="header__login">Sign in</span>
                  </Link>}

              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
