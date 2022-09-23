import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import Case from './pages/Case';
import CreateNewCase from "./pages/CreateNewCase";
import Home from "./pages/Home";
import Login from "../src/pages/Login";
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from "./styles/global";

function App() {
  const isUser = true;

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={isUser ? <Home /> : <Login />}
        />
        <Route
          path="/"
          element={isUser ? <Home /> : <Login />}
        />
        <Route
          path="/createNewCase"
          element={isUser ? <CreateNewCase /> : <Login />}
        />
        <Route
          path="/case/:id"
          element={isUser ? <Case /> : <Login />}
        />
      </Routes>
      <GlobalStyle />
      <ToastContainer />
    </Router>
  );
}

export default App;
