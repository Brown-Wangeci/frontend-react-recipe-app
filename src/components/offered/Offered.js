import styles from './offered.module.css';
// import foodImage from './assets/foodImages/floating-food-transformed-removebg-preview.png';
// import foodImage2 from './assets/foodImages/food-image-removebg-preview.png';
import foodImage3 from './assets/foodImages/pngwing.com.png';
// import foodImage5 from './assets/foodImages/food-image5-transformed-removebg-preview.png';


const Offered = () => {
    return ( 
        <div className={styles.offered}>
            <h1 className={styles.title}>Our Offers</h1>
            <h3 className={styles.subTitle}>We offer love and convenience</h3>
            <hr className={styles.hr}/>
            <div className={styles.content}>
                <section className={styles.upperOffers}>
                    <div className={styles.leftUpperOffers}>
                        <div className={styles.offersDescription}>
                            <h3>Family Recipes Collection</h3>
                            <p className={styles.p}>Discover timeless family recipes passed down through generations, bringing the comfort of home-cooked meals to your kitchen.</p>
                        </div>
                        <div className={styles.offersDescription}>
                            <h3>Grandma's Classics</h3>
                            <p className={styles.p}>Relive the warmth and love of grandma’s kitchen with a selection of classic, heartwarming recipes.</p>
                        </div>
                    </div>

                    <div className={styles.centerUpperOffers}>
                        <img className={styles.foodImage3} src={foodImage3} alt="food-image" />
                    </div>

                    <div className={styles.rightUpperOffers}>
                        <div className={styles.offersDescription}>
                            <h3>Recipe of the week</h3>
                            <p className={styles.p}>Try our featured recipe of the week, handpicked to inspire your next delicious meal</p>
                        </div>
                        <div className={styles.offersDescription}>
                            <h3>Quick & Easy Meals</h3>
                            <p className={styles.p}>Find simple, time-saving recipes perfect for busy weeknights, ready in 30 minutes or less.</p>
                        </div>
                    </div>

                </section>
                <section className={styles.lowerOffers}>
                    <div className={styles.offersDescription}>
                        <h3>Community Favorites</h3>
                        <p className={styles.p}>Explore the most-loved recipes from our community, chosen by fellow food enthusiasts like you.</p>
                    </div>
                </section>
            </div>
        </div>
     );
}
 
export default Offered;