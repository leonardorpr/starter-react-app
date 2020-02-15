import React from 'react';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import { MainRoutes } from 'routes';

import { store, persistor } from 'store';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MainRoutes />
    </PersistGate>
  </Provider>
);

export default App;
