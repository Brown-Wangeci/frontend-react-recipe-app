import styles from './signuppage.module.css';
import SignUp from '../../components/signup/SignUp';
import { motion } from 'framer-motion';

const SignUpPage = () => {
    return ( 
        <motion.div 
            className={styles.signUpPage}
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', delay: 0.2}}
        >
            <SignUp/>
        </motion.div>
     );
}
 
export default SignUpPage;