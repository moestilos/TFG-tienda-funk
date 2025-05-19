import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Landing } from "./assets/landing";
import Login from './components/Login';
import Register from './components/Register';


export default function App() {
  return (

      <BrowserRouter>
        <div className="app">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </BrowserRouter>

  );
}
