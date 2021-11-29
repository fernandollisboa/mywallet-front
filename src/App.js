import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle.js';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute.js';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route path="/app" element={<ProtectedRoute />}>
          <Route elemet={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
