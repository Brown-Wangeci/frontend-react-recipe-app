import styles from './loginpage.module.css';
import Login from '../../components/login/Login';
import { motion } from 'framer-motion';

const LogInPage = () => {
    return ( 
        <motion.div
            className={styles.logInPage}
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', delay: 0.2}}
        >
            <Login/>
        </motion.div>
     );
}
 
export default LogInPage;