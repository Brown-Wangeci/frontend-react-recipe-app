import { Navigate } from 'react-router-dom';
import { toast } from 'sonner';
import useUser from '../hooks/useUser';

const PublicRoute = ({ children, redirectPath = '/' }) => {
    const { userToken } = useUser();

    if (userToken) {
        toast.info('You are already logged in!', {
            duration: 3000
        });
        return <Navigate to={redirectPath} replace />;
    }

    return children;
};

export default PublicRoute;
