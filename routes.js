import Root from './pages/Root';
import SignIn from './pages/SignIn';

const routes = [
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
];

export default routes;