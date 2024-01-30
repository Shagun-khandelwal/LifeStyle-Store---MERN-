import {Navigate,Outlet,useLocation} from 'react-router-dom';
import { getCurrentUser } from '../services/authservice';

const ProtectedRoutesLogin = () => {
    const location = useLocation();
    const user = getCurrentUser();
    return user? <Navigate to="/products" replace state={{from:location}}/>:<Outlet/>;
}
 
export default ProtectedRoutesLogin;