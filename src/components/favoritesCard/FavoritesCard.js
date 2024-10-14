import styles from './favoritescard.module.css';
import { BsTrash3 } from "react-icons/bs";

const FavoritesCard = () => {
    return ( 
        <div className={styles.FavoritesCardWrapper}>
            <div className={styles.favoritesCard}>
                <div className={styles.imageWrapper}>
                    <img 
                        src="https://www.themealdb.com/images/media/meals/hglsbl1614346998.jpg"
                        alt="profile"
                        className={styles.image}
                    />
                </div>
                <div className={styles.innerCard}>
                    <h2 className={styles.cardTitle}>Chicken Curry</h2>
                    <span style={{fontSize:'12px'}}>Published: September 15, 2024</span>
                        <p style={{fontSize:'12px'}}>By: Brown</p>
                    <p className={styles.cardDescription}>Chicken curry is a common delicacy in South Asia, Southeast Asia, as well as in the Caribbean.</p>
                    <BsTrash3 className={styles.trashIcon}/>
                </div>
            </div>
        </div>
     );
}
 
export default FavoritesCard;