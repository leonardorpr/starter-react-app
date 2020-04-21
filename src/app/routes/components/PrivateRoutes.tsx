import React, { useCallback } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from 'configs/history';
import privateRoutesList from 'routes/routesList/privateRoutes';

const PrivateRoutes = () => {
  const renderRoutes = useCallback(() => {
    const mappedRoutes = privateRoutesList.map(route => <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />);

    return mappedRoutes;
  }, []);

  return (
    <Router history={history}>
      <Switch>{renderRoutes()}</Switch>
    </Router>
  );
};

export default PrivateRoutes;
