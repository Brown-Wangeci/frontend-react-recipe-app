import styles from './navbar.module.css';
import logo from './picnic-basket.png';
import { Link } from 'react-router-dom';
import HamburgerIcon from '../hamburgerIcon/HamburgerIcon';

const Navbar = ({navLinks}) => {

    return ( 
        <nav className={styles.navbar}>
            <div className={styles.logoSection}>
                <img className={styles.logo} src={logo} alt="logo"/>
                <h1 className={styles.h1}><span>Cosy</span> Recipes</h1>
            </div>
            <div className={styles.hamburgerIcon}><HamburgerIcon/></div>
            <div className={styles.navlinks}>
                <ul className={styles.ulLinks}>
                    {navLinks.map((link, index)=>(
                        <li key={index} className={styles.liLinks}><Link to={link.path}>{link.name}</Link></li>
                    ))}
                </ul>
            </div>
        </nav>
     );
}

export default Navbar;