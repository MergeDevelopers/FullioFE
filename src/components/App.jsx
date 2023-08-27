import { routePaths } from '../constants/path';
import MainPage from '../pages/MainPage/MainPage';
import SignIn from '../pages/SignIn/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={routePaths.login} element={<SignIn />} />
          <Route path={routePaths.home} element={<MainPage />} />
          <Route path={routePaths.myPage} element={<div>myPage</div>} />
          <Route path={routePaths.record} element={<div>record</div>} />
          <Route path={routePaths.admin} element={<div>admin</div>} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
