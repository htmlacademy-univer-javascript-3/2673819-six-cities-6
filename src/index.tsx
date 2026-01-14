import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app.tsx';
import {store} from './store';
import {checkAuthAction, fetchOffers} from './store/api-actions.ts';
import HistoryRouter from './components/history-router/history-router.tsx';
import browserHistory from './browser-history.ts';

store.dispatch(checkAuthAction());
store.dispatch(fetchOffers());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <App/>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
