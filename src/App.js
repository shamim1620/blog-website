
import './App.css';
import Home from './Pages/Home/Home/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './Pages/Home/Login/Login/Login';
import Register from './Pages/Home/Login/Register/Register';
import AuthProvider from './context/AuthProvider';
import WriteBlog from './Pages/WriteBlog/WriteBlog';
import PrivateOutlet from './Pages/PrivateOutlet/PrivateOutlet';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/*" element={<PrivateOutlet />}>
            <Route path="writeBlog" element={<WriteBlog />} />
          </Route >
        </Routes>
      </Router>
    </AuthProvider>

  );
}

export default App;
