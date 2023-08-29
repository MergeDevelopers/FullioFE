import { ROUTE_PATHS } from '../constants/path';
import MainPage from '../pages/MainPage/MainPage';
import SignIn from '../pages/SignIn/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={ROUTE_PATHS.login} element={<SignIn />} />
          <Route path={ROUTE_PATHS.home} element={<MainPage />} />
          <Route path={ROUTE_PATHS.myPage} element={<div>myPage</div>} />
          <Route path={ROUTE_PATHS.record} element={<div>record</div>} />
          <Route path={ROUTE_PATHS.admin} element={<div>admin</div>} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
