import styles from './notfoundpage.module.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(prevCountdown => {
                if (prevCountdown === 1) {
                    clearInterval(interval);
                    navigate('/');
                    return 0;
                }
                return prevCountdown - 1;
            });
        }, 1000);

        
        return () => clearInterval(interval);
    }, [navigate]);

    return ( 
        <div className={styles.notFoundPage}>
            <h1 className={styles.h1}>404</h1>
            <h2 className={styles.h2}>Page Not Found</h2>
            <p className={styles.p}>Sorry, that page doesn't exist</p>
            <p className={styles.countdown}>Redirecting in {countdown} seconds...</p>
        </div>
    );
};

export default NotFoundPage;
