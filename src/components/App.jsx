import { ROUTE_PATHS } from '../constants/path';
import MainPage from '../pages/MainPage/MainPage';
import SignIn from '../pages/SignIn/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTE_PATHS.login} element={<SignIn />} />
          <Route path={ROUTE_PATHS.home} element={<MainPage />} />
          <Route path={ROUTE_PATHS.myPage} element={<div>myPage</div>} />
          <Route path={ROUTE_PATHS.record} element={<div>record</div>} />
          <Route path={ROUTE_PATHS.admin} element={<div>admin</div>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
