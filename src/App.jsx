import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// Components
import Navbar from './components/navbar/index.jsx';

// Pages
import Login from './pages/login';
import PageNotFound from "./pages/404/index.jsx";

// Routes
import Routing from './routing';

// Firebase
import { useAuth } from './pages/login/auth.js';


function App() {
  const { userId } = useAuth();

  return (

    <BrowserRouter>
      <Navbar loggedIn={userId !== null} />
      <Routes>
        {
          Routing.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))
        }
        <Route path="/" element={<Login />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
