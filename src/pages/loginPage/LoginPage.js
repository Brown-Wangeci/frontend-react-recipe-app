import styles from './loginpage.module.css';
import Login from '../../components/login/Login';
import GeneratedCard from '../../components/generatedcard/GeneratedCard';

const LogInPage = () => {
    return ( 
        <div className={styles.logInPage}>
            <Login/>
        </div>
     );
}
 
export default LogInPage;