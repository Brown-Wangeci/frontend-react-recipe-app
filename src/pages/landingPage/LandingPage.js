import styles from './landingpage.module.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

    const navigate = useNavigate();

    return ( 
        <div className={styles.landingPage}>
            <h1 className={styles.title}>Welcome to Cosy Recipes</h1>
            <p className={styles.description}>The best place to find and share recipes</p>
            <div className={styles.buttons}>
                <button className={styles.button} onClick={()=>navigate('/login')} >Login</button>
                <button className={styles.button} onClick={()=>navigate('/signup')} >Sign Up</button>
            </div>
        </div>
     );
}
 
export default LandingPage;