import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SignUpItemPage from './pages/SignUpPage';
import FoundlyItens from './components/FoundlyItens/FoundlyItens';
import EditProfile from './components/EditProfile/EditProfile';
import SearchItem from './components/SearchItem/SearchItem';
import EditItem from './components/EditItem/EditItem';
import PrivateRoute from './components/PrivateRoutes/PrivateRoutes';
import Logout from './components/Logout/Logout';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route
            path="/signup-item"
            element={
              <PrivateRoute>
                <SignUpItemPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/foundly-itens"
            element={
              <PrivateRoute>
                <FoundlyItens />
              </PrivateRoute>
            }
          />
          <Route
            path="/edit-profile"
            element={
              <PrivateRoute>
                <EditProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/search-item"
            element={
              <PrivateRoute>
                <SearchItem />
              </PrivateRoute>
            }
          />
          <Route
            path="/edit-item"
            element={
              <PrivateRoute>
                <EditItem />
              </PrivateRoute>
            }
          />
          <Route
            path="/logout"
            element={
              <PrivateRoute>
                <Logout />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
