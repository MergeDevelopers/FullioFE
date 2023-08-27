import SignIn from '../pages/SignIn/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
