import React from 'react';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import GlobalStyles from 'assets/styles';
import { MainRoutes } from 'routes';

import { store, persistor } from 'store';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyles />
      <MainRoutes />
    </PersistGate>
  </Provider>
);

export default App;
