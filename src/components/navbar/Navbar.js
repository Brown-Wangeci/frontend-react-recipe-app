import styles from './navbar.module.css';
import logo from './picnic-basket.webp';
import { Link } from 'react-router-dom';
import HamburgerIcon from '../hamburgerIcon/HamburgerIcon';
import { useState } from 'react';
import useUser from '../../hooks/useUser';

const Navbar = ({navLinks}) => {
    const [displayNavlinks, setDisplayNavlinks] = useState(false);
    const { clearToken, userToken } = useUser();
    const toggleNavlinksDisplay = () => {
        setDisplayNavlinks(!displayNavlinks);
    }

    return ( 
        <nav className={styles.navbar}>
            <Link to='/'>
                <div className={styles.logoSection}>
                    <img className={styles.logo} src={logo} alt="logo"/>
                    <h1 className={styles.h1}><span>Cosy</span> Recipes</h1>
                </div>
            </Link>
            <div onChange={toggleNavlinksDisplay} className={styles.hamburgerIcon}><HamburgerIcon /></div>
            <div className={`${styles.navlinks} ${!displayNavlinks ? styles.hideLinks: styles.showLinks}`}>
            <ul className={styles.ulLinks}>
    {navLinks.map((link, index) => (
        (link.path === '/favorites' || link.path === '/my-recipes' || link.path === '/create-recipe') ? (
            userToken ? (
                <li key={index} className={styles.liLinks}>
                    <Link to={link.path}>{link.name}</Link>
                </li>
            ) : null
        ) : (
            <li key={index} className={styles.liLinks}>
                <Link to={link.path}>{link.name}</Link>
            </li>
        )
    ))}
    {
        userToken ? (
            <li className={styles.liLinks} onClick={clearToken}>
                <span className={styles.logoutButton}>Logout</span>
            </li>
        ) : (
            <>
                <li className={styles.liLinks}>
                    <Link to='/login'>Login</Link>
                </li>
                <li className={styles.liLinks}>
                    <Link to='/signup'>Signup</Link>
                </li>
            </>
        )
    }
</ul>

            </div>
        </nav>
     );
}

export default Navbar;