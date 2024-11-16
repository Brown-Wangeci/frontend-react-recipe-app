import styles from './notfoundpage.module.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const NotFoundPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        toast.loading('Redirecting in 5 seconds...');
        
        const timer = setTimeout(() => {
            navigate('/');
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return ( 
        <div className={styles.notFoundPage}>
            <h1 className={styles.h1}>404</h1>
            <h2 className={styles.h2}>Page Not Found</h2>
            <p className={styles.p}>Sorry, that page doesn't exist</p>
        </div>
     );
}
 
export default NotFoundPage;