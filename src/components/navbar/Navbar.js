import styles from './navbar.module.css';
import logo from './picnic-basket.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className={styles.navbar}>
            <div className={styles.logoSection}>
                <img className={styles.logo} src={logo} alt="logo"/>
                <h1 className={styles.h1}><span>Cosy</span> Recipes</h1>
            </div>
            <div className={styles.navlinks}>
                <ul className={styles.ulLinks}>
                    <li className={styles.liLinks}><a href="/">Home</a></li>
                    <li className={styles.liLinks}><a href="/recipes">Recipes</a></li>
                    <li className={styles.liLinks}><Link to="/login">Login</Link></li>
                    <li className={styles.liLinks}><Link to="/signup">SignUp</Link></li>
                </ul>
            </div>
        </nav>
     );
}

export default Navbar;