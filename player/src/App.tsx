import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/home/Home';
import { UserProvider } from 'mediastore/UserContext';
import ProtectedRoute from 'mediastore/ProtectedRoute';
import Layout from './views/Layout';
import { MediaProvider } from 'mediastore/MediaContext';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <UserProvider>
        <MediaProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route
                path="/upload"
                element={
                  <ProtectedRoute>
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </MediaProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
