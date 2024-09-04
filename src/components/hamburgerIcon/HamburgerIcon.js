import styles from './hamburgericon.module.css';

const HamburgerIcon = () => {
    return ( 
        <div className={styles.HamburgerIcon}>
            <input className={styles.hamburgericon} type="checkbox" name="hamburgericon" id="hamburgericon" />
            <label htmlFor='hamburgericon' className={styles.hamburgerIconLabelWrapper}>
                <div className={styles.hamburgerIconLabel}>
                    <div className={`${styles.line} ${styles.line1}`}></div>
                    <div className={`${styles.line} ${styles.line2}`}></div>
                    <div className={`${styles.line} ${styles.line3}`}></div>
                </div>
            </label>
        </div>
     );
}
 
export default HamburgerIcon;