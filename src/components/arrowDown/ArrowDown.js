import styles from './arrowdown.module.css';
import arrowImage from './keyboard_double_arrow_down_24dp_000000_FILL0_wght400_GRAD0_opsz24.png';
import { useEffect, useState } from 'react';

const ArrowDown = ({top='', right='', bottom='', left=''}) => {
    const [scrolled, setScrolled] = useState(false);

    const scrollDown = ()=> {
        window.scrollBy(
            {
                top: window.innerHeight-140,
                behavior: 'smooth'
            }
        );
    };


    const handleScroll = () => {
        if (window.scrollY >= window.innerHeight-150) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
      };
    
    useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);

    return ( 
        <div onClick={scrollDown}
            className={`${styles.arrowDown} ${scrolled ? styles.scrolled: styles.bounce}`}
            style={{ top, right, bottom, left}}
            >
            <img className={styles.arrowImage} src={arrowImage} alt="scroll-down-image" />
        </div>
     );
}

export default ArrowDown;