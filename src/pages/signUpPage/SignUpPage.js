import styles from './signuppage.module.css';
import SignUp from '../../components/signup/SignUp';

const SignUpPage = () => {
    return ( 
        <div className={styles.signUpPage}>
            <SignUp/>
        </div>
     );
}
 
export default SignUpPage;