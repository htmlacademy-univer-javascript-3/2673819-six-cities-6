import Logo from '../../components/logo/logo.tsx';
import {Link} from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--not-found">
        <div className="page__not-found-container container">
          <h1>404 Not Found</h1>
          <Link className="header__logo-link" to="/">
            Перейдите к главную страницу
          </Link>
        </div>
      </main>
    </div>
  );
}

export default NotFoundScreen;
