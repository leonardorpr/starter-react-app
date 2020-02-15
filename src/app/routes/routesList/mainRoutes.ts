// eslint-disable-next-line
import { IConfigureRoutes } from 'interfaces/IConfigureRoutes';

import SignIn from 'screens/SignIn';

const mainRoutes: IConfigureRoutes[] = [
  {
    component: SignIn,
    path: '/',
    exact: true,
  },
];

export default mainRoutes;
