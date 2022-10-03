import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { AuthProvider, useAuth } from './helpers';
import Home from "./pages/Home";
import Login from "./pages/Login";
import LegalCase from './pages/LegalCase';
import CreateLegalCase from "./pages/CreateLegalCase";
import { GlobalStyle } from "./styles/global";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { user } = useAuth();

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Login />}
          />
          <Route
            path="/login"
            element={user ? <Home /> : <Login />}
          />
          <Route
            path="/legalCase/:id"
            element={user ? <LegalCase /> : <Login />}
          />
          <Route
            path="/createLegalCase"
            element={user ? <CreateLegalCase /> : <Login />}
          />
        </Routes>
        <GlobalStyle />
        <ToastContainer />
      </Router>
    </AuthProvider>
  );
}

export default App;
