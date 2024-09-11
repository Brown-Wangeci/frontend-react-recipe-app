import styles from './herosection.module.css';
import grandmaImage from './assets/peopleImages/recipe-screenshot-removebg-preview.png';
import familyImage from './assets/peopleImages/wes3-pic-removebg-preview.png';
import family2Image from './assets/peopleImages/wesonga-pic-removebg-preview.png';
import grandmaAndGirlImage from './assets/peopleImages/AdobeStock_938365139_Preview__1_-transformed-removebg-preview.png';
import ladyImage from './assets/peopleImages/AdobeStock_649050375_Preview-removebg-preview.png';
import guyAndLadyImage from './assets/peopleImages/etsy-screenshot-removebg-preview.png';
import guyImage from './assets/peopleImages/wes4-pic-removebg-preview.png';
import { useNavigate } from 'react-router-dom';
import arrowImage from './assets/icons/arrow-right.png';
import arrowImage2 from './assets/icons/arrow-right (1).png';
import profile from './assets/peopleImages/linkedinpic2.jpg';
import addSign from './assets/icons/add_24dp_75FB4C_FILL0_wght400_GRAD0_opsz24.png';
import { useState, useEffect } from 'react';


const HeroSection = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [grandmaImage, grandmaAndGirlImage, ladyImage, guyAndLadyImage, guyImage, familyImage, family2Image];

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1000 * 6);
    
        return () => clearInterval(interval); 
      }, []);

    return ( 
        <div className={styles.heroSection}>
            <div className={styles.leftSection}>
                <img className={styles.grandmaImage} src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            </div>
            <div className={styles.rightSection}>
                <h2 className={styles.title}>Welcome to 
                    <h1 className={styles.h1}>Cosy
                        <span className={styles.recipeSpan}> Recipes</span>
                    </h1>
                </h2>
                <p className={styles.description}>The best place to find and share recipes.</p>
                <p className={styles.description}>Bringing the warmth of grandma's kitchen </p>
                <p className={styles.description}>and the joy of family meals to your table.</p>
                <div className={styles.buttons}>
                    <button className={`${styles.button} ${styles.loginButton}`} onClick={()=>navigate('/login')} >Login <img className={styles.arrowImage} src={arrowImage} alt="arrow" /></button>
                    <button className={`${styles.button} ${styles.signUpButton}`} onClick={()=>navigate('/signup')} >Sign Up <img className={styles.arrowImage} src={arrowImage2} alt="arrow" /></button>
                </div>
                <div className={styles.usersSection}>
                    <div className={styles.profileimages}>
                        <img className={styles.profileImage} src="https://gateremark.github.io/Makifoods/img/customers/customer-1.jpg" alt="Customer photo"/>
                        <img className={styles.profileImage} src="https://gateremark.github.io/Makifoods/img/customers/customer-3.jpg" alt='user-profile'/>
                        <img className={styles.profileImage} src="https://gateremark.github.io/Makifoods/img/customers/customer-2.jpg" alt='user-profile'/>
                        <img className={styles.profileImage} src="https://gateremark.github.io/Makifoods/img/customers/customer-4.jpg" alt='user-profile'/>
                        <img className={styles.profileImage} src="https://gateremark.github.io/Makifoods/img/customers/customer-5.jpg" alt='user-profile'/>
                        <img className={styles.profileImage} src="https://gateremark.github.io/Makifoods/img/customers/customer-6.jpg" alt='user-profile'/>
                        <img className={styles.profileImage} src={profile} alt='user-profile'/>
                    </div>
                    <div className={styles.users}><img className={styles.addSign} src={addSign} alt="add-sign" /> <span className={styles.usersNumber}> 1200 Families</span></div>
                </div>
            </div>
        </div>
     );
}
 
export default HeroSection;