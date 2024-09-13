import styles from './landingpage.module.css';
import HeroSection from '../../components/heroSection/HeroSection';
// import Confetti from 'react-confetti';
import Offered from '../../components/offered/Offered';
import Testimonials from '../../components/testimonials/Testimonials';

const LandingPage = () => {

    return ( 
        <div className={styles.landingPage}>
            <HeroSection/>
            <Offered/>
            <Testimonials/>
        </div>
     );
}
 
export default LandingPage;