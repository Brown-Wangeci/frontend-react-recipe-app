import {useState, useEffect} from 'react';
import Axios from 'axios';
import Button from '../button/Button';
import styles from './generatedCard.module.css';
import heartIcon from './favorite (1).png';

const GeneratedCard = () => {
    const [meal, setMeal] = useState(null);

    const fetchMealData = async () => {
        try {
            const response = await Axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
            setMeal(response.data.meals[0]);
        } catch (error) {
            console.error(error.message);
        }
    }
    useEffect(()=>{
        fetchMealData();
    },[])

    return (
        <div className={styles.card}>
            <img src={meal && meal.strMealThumb} alt="profile" className={styles.image}/>
            <div className={styles.innerCard}>
                <div className={styles.tagsContainer}>
                    <div className={`${styles.tag} ${styles.category}`}>{meal && meal.strCategory}</div>
                    <div className={`${styles.tag} ${styles.cuisine}`}>{meal && meal.strArea}</div>
                </div>
                <div className={styles.mealName}><strong>{meal && meal.strMeal}</strong></div>
                <input className={styles.checkBox} type="checkbox" name="favorite" id="favorite" />
                <label htmlFor="favorite" className={styles.favoriteLabel}>
                    <img className={styles.icon} src={heartIcon} height="30px" alt="favorite-icon" />
                    <div className={styles.favoriteText}>
                        <span className={`${styles.add} ${styles.options}`}>Add to Favorites</span>
                        <span className={`${styles.added} ${styles.options}`}>Added to Favorites</span>
                    </div>
                </label>
                <div className={styles.button}><Button name={"View Recipe"}/></div>
            </div>
        </div>
     );
}
 
export default GeneratedCard;