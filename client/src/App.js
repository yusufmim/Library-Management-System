import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import Books from './pages/Books';
import BookDetails from './pages/BookDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Borrow from './pages/Borrow';
import AdminBooks from './pages/AdminBooks';

import { AuthProvider } from './utils/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        
        <div className="container">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/:id" element={<BookDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/profile"
              element={<ProtectedRoute component={Profile} />}
            />
            <Route
              path="/borrow"
              element={<ProtectedRoute component={Borrow} />}
            />
            <Route
              path="/admin/books"
              element={<ProtectedRoute component={AdminBooks} adminOnly />}
            />
          </Routes>
        </div>

        <footer className="footer">
          <p>&copy; 2025 Library Management System. All rights reserved.</p>
          <p>
            <a href="/about">About Us</a> | <a href="/contact">Contact</a>
          </p>
        </footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
