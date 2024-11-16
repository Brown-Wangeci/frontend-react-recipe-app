import { Navigate } from 'react-router-dom';
import { toast } from 'sonner';
import useUser from '../hooks/useUser';

const ProtectedRoute = ({ children }) => {
    const { userToken } = useUser();

    if (!userToken) {
        toast.error('You must log in to access this page.', {
            duration: 3000,
        });
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
