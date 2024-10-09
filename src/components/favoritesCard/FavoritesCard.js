import styles from './favoritescard.module.css';

const FavoritesCard = () => {
    return ( 
        <div className={styles.favoritesCard}>
            <div className={styles.imageWrapper}>
                <img 
                    src="https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg"
                    alt="profile"
                    className={styles.image}
                />
            </div>
            <div className={styles.innerCard}>
            </div>
        </div>
     );
}
 
export default FavoritesCard;