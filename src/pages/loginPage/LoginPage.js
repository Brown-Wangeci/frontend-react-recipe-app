import styles from './loginpage.module.css';
import Login from '../../components/login/Login';

const LogInPage = () => {
    return ( 
        <div className={styles.logInPage}>
            <Login/>
        </div>
     );
}
 
export default LogInPage;