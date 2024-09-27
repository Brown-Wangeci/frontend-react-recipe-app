import styles from './testimonials.module.css';
// import brownImage from './assets/userImages/linkedinpic2.jpg';
import eugeneImage from './assets/userImages/eugene-image.jpg';
import daniellaImage from './assets/userImages/daniella-image.jpg';
import yabannImage from './assets/userImages/yabann-image.jpg';
import leftQuote from './assets/icons/icons8-quotes-100.png';
import rightQuote from './assets/icons/icons8-quotes-100 (1).png';


const Testimonials = () => {
    return ( 
        <div className={styles.testimonials}>
            <h1 className={styles.title}>Testimonials</h1>
            <h3 className={styles.subTitle}>What our users say...</h3>
            <hr className={styles.hr}/>
            <div className={styles.content}>
                <div className={`${styles.userCardWrapper} ${styles.firstCard}`}>
                    <div className={styles.userCard}>
                        <div className={styles.userImage}>
                            <img className={styles.userImage} src={eugeneImage} alt="userImage" />
                        </div>
                        <div className={styles.userDetails}>
                            <h2>James Taylor</h2>
                            <p>
                                <img className={styles.quotes} src={leftQuote} alt="quote" />
                                I've tried several recipes from this website, and every single one has been a hit with my family. The instructions are clear, and the dishes always turn out perfectly. Highly recommend for anyone looking to add some delicious variety to their meals
                                <img className={styles.quotes} src={rightQuote} alt="quote" />
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.userCardWrapper} ${styles.secondCard}`}>
                    <div className={styles.userCard}>
                        <div className={styles.userImage}>
                            <img className={styles.userImage} src={daniellaImage} alt="userImage" />
                        </div>
                        <div className={styles.userDetails}>
                            <h2>Ava Anderson</h2>
                            <p>
                                <img className={styles.quotes} src={leftQuote} alt="quote" />
                                I’ve been using this recipe website for a few months now, and it’s become my go-to for meal inspiration. The recipes are not only tasty but also beautifully presented. I love the sense of warmth and nostalgia that each dish brings.
                                <img className={styles.quotes} src={rightQuote} alt="quote" />
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.userCardWrapper} ${styles.thirdCard}`}>
                    <div className={styles.userCard}>
                        <div className={styles.userImage}>
                            <img className={styles.userImage} src={yabannImage} alt="userImage" />
                        </div>
                        <div className={styles.userDetails}>
                            <h2>Noah Miller</h2>
                            <p>
                                <img className={styles.quotes} src={leftQuote} alt="quote" />
                                I stumbled upon this recipe website while searching for new dinner ideas, and it’s quickly become my go-to resource. The recipes are straightforward and turn out great every time. It’s been a joy to explore and cook dishes that remind me of family meals. Thanks for making cooking enjoyable and stress-free!
                                <img className={styles.quotes} src={rightQuote} alt="quote" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Testimonials;