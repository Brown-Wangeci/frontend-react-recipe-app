import {useState, useEffect} from 'react';
import Axios from 'axios';
import FavouriteButton from '../button/Button';
import styles from './generatedCard.module.css';
import Image from './favorite (1).png';

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
            <div className={styles.tags}>
                <div className={`${styles.tag} ${styles.category}`}>{meal && meal.strCategory}</div>
                <div className={`${styles.tag} ${styles.area}`}>{meal && meal.strArea}</div>
            </div>
            <div className={styles.name}><strong>{meal && meal.strMeal}</strong></div>
            <input className={styles.input} type="checkbox" name="favorite" id="favorite" />
            <label htmlFor="favorite" className={styles.favorite}>
                <img className={styles.icon} src={Image} height="30px" alt="favorite" />
                <div className={styles.favoriteText}>
                    <span className={`${styles.add} ${styles.options}`}>Add to Favorites</span>
                    <span className={`${styles.added} ${styles.options}`}>Added to Favorites</span>
                </div>
            </label>
            <div className={styles.button}><FavouriteButton /></div>
        </div>
     );
}
 
export default GeneratedCard;