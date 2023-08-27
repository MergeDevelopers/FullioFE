import { routePaths } from '../constants/path';
import SignIn from '../pages/SignIn/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={routePaths.login} element={<SignIn />} />
          <Route path={routePaths.main} element={<div>main</div>} />
          <Route path={routePaths.myPage} element={<div>myPage</div>} />
          <Route path={routePaths.record} element={<div>record</div>} />
          <Route path={routePaths.admin} element={<div>admin</div>} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
