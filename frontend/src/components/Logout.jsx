import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh');
    delete axios.defaults.headers.common['Authorization'];
    navigate('/login');
  };

  return (
    <button 
      onClick={handleLogout}
      className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
    >
      Cerrar Sesión
    </button>
  );
};

export default Logout;
