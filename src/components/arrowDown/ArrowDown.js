import styles from './arrowdown.module.css';
import arrowImage from './keyboard_double_arrow_down_24dp_000000_FILL0_wght400_GRAD0_opsz24.png';

const ArrowDown = () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const currentScrollPosition = window.scrollY;

    const scrollDown = ()=> {
        if (currentScrollPosition < scrollableHeight){
            window.scrollBy(
                {
                    top: window.innerHeight-150,
                    behavior: 'smooth'
                }
            );
        }

    };

    return ( 
        <div onClick={scrollDown} className={styles.arrowDown}>
            <img className={styles.arrowImage} src={arrowImage} alt="" />
        </div>
     );
}
 
export default ArrowDown;