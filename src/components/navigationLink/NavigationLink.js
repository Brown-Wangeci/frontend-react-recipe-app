import styles from './navigationlink.module.css';
import homeIcon from './pngwing.com.png';

const NavigationLink = ({icon = homeIcon, text = 'Home', link}) => {
    return ( 
        <div className={styles.navigationLink}>
            <div className={styles.iconWrapper}>
                <img className={styles.icon} src={icon} alt="icon"/>
            </div>
            <div className={styles.linkWrapper}>
                <a href={link} className={styles.link}>{text}</a>
            </div>
        </div>
     );
}
 
export default NavigationLink;