import styles from './landingpage.module.css';
import HeroSection from '../../components/heroSection/HeroSection';
import Confetti from 'react-confetti';
import { useEffect, useState } from 'react';

const LandingPage = () => {
    const [showConfetti, setShowConfetti] = useState(true);
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    setTimeout(()=>{
        setShowConfetti(false);
    }
    , 1000 )

    useEffect(()=>{
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    },[
        windowSize.width,
        windowSize.height
    ])

    return ( 
        <div className={styles.landingPage}>
            {showConfetti && <Confetti
                width={windowSize.width}
                height={windowSize.height}
            /> }
            <HeroSection/>
        </div>
     );
}
 
export default LandingPage;