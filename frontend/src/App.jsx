import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Landing } from "./assets/landing";
import Login from './components/Login';
import Register from './components/Register';
import Collection from './features/collections/components/Coleccion'


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
        <Collection />
      </BrowserRouter>

  );
}
