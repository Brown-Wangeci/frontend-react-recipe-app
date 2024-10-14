import {useState} from 'react';
import Button from '../button/Button';
import styles from './generatedCard.module.css';
import heartIcon from './favorite (1).png';
import { useNavigate } from 'react-router-dom';

const GeneratedCard = ({recipe}) => {
    const [recipeState] = useState(recipe);
    const [isFavorite, setIsFavorite] = useState(false);
    const navigate = useNavigate();

    const goToRecipePage = ()=>{
        navigate(`/recipe/${recipeState._id}`);
    }

    return (
            recipeState && 
            (<div className={styles.card}>
                <div className={styles.imageWrapper}>
                    <img 
                        src={recipeState.image}
                        alt="profile"
                        className={styles.image}
                        onClick={goToRecipePage}
                    />
                </div>
                <div className={styles.innerCard}>
                    <div className={styles.tagsContainer}>
                        <div className={`${styles.tag} ${styles.category}`}>{recipeState.category}</div>
                        <div className={`${styles.tag} ${styles.cuisine}`}>{recipeState.cuisine}</div>
                    </div>
                    <div className={styles.mealName}><h3>{recipeState.name}</h3></div>
                    <input className={styles.checkBox} type="checkbox" 
                        checked={isFavorite}
                        onChange={() => setIsFavorite(true)}
                        name="favorite"
                        id={`favorite-${recipeState._id}`}
                     />
                    <label htmlFor={`favorite-${recipeState._id}`} className={styles.favoriteLabel}>
                        <img className={styles.icon} src={heartIcon} height="30px" alt="favorite-icon" />
                        <div className={styles.favoriteText}>
                            <span className={`${styles.add} ${styles.options}`}>Add to Favorites</span>
                            <span className={`${styles.added} ${styles.options}`}>Added to Favorites</span>
                        </div>
                    </label>
                    <div className={styles.button} onClick={goToRecipePage}><Button name={"View Recipe"} /></div>
                </div>
            </div>)
     );
}
 
export default GeneratedCard;