import MainScreen from '../../pages/main-screen/main-screen.tsx';
import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import LoginScreen from '../../pages/login-screen/login-screen.tsx';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen.tsx';
import OfferScreen from '../../pages/offer-screen/offer-screen.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen.tsx';
import {useAppSelector} from '../../hooks';

function App() {
  const authStatus = useAppSelector((state) => state.User.authorizationStatus);
  return (
    <Routes>
      <Route
        path={AppRoute.Root}
        element={<MainScreen/>}
      />
      <Route
        path={AppRoute.Login}
        element={<LoginScreen/>}
      />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute authorizationStatus={authStatus}>
            <FavoritesScreen/>
          </PrivateRoute>
        }
      />
      <Route
        path={`${AppRoute.Offer}/:id`}
        element={<OfferScreen/>}
      />
      <Route
        path="*"
        element={<NotFoundScreen/>}
      />
    </Routes>
  );
}

export default App;
