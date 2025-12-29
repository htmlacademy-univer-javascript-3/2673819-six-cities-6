import MainScreen from '../../pages/main-screen/main-screen.tsx';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import LoginScreen from '../../pages/login-screen/login-screen.tsx';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen.tsx';
import OfferScreen from '../../pages/offer-screen/offer-screen.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import {HelmetProvider} from 'react-helmet-async';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen.tsx';
import {comments} from '../../mocks/comments.ts';
import {offers} from '../../mocks/offers.ts';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
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
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <FavoritesScreen/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferScreen offer={offers[0]} reviews={comments}/>}
          />
          <Route
            path="*"
            element={<NotFoundScreen/>}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
