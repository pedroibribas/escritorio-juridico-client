import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import Login from "./pages/Login";
import LegalCase from './pages/LegalCase';
import CreateLegalCase from "./pages/CreateLegalCase";
import { AuthProvider, useAuth } from './helpers';

import { GlobalStyle } from "./styles/global";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { user } = useAuth();
  const isLoggedIn = user && true;

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <Login />} />
          <Route path="/login" element={isLoggedIn ? <Home /> : <Login />} />
          <Route
            path="/legalCase/:id"
            element={isLoggedIn ? <LegalCase /> : <Login />}
          />
          <Route
            path="/createLegalCase"
            element={isLoggedIn ? <CreateLegalCase /> : <Login />}
          />
        </Routes>
        <GlobalStyle />
        <ToastContainer />
      </Router>
    </AuthProvider>
  );
};

export default App;
