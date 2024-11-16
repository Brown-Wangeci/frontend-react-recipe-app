import {useState} from 'react';
import Button from '../button/Button';
import styles from './generatedCard.module.css';
import heartIcon from './favorite (1).png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useUser from '../../hooks/useUser';
import { toast } from 'sonner';

const GeneratedCard = ({recipe}) => {
    const url = process.env.REACT_APP_BACKEND_URL;
    const { userToken } = useUser();
    const [recipeState] = useState(recipe);
    const [isFavorite, setIsFavorite] = useState(false);
    const navigate = useNavigate();


    const toggleFavorite = async () => {
        try {
            const response = await axios.post(`${url}/users/favorites`, {
            recipeId: recipeState._id,
            isFavorite: !isFavorite,
          },
          {
            headers: {
              'Authorization': `Bearer ${userToken}`,
            }
          });

          if (response.data.success) {
            setIsFavorite(!isFavorite);
            isFavorite ? toast.success('Removed from favorites') : toast.success('Added to favorites');

          } else {
            console.error("Failed to update favorites");
            toast.error('Failed to update favorites');
          }
        } catch (error) {
          const message = error?.response?.data?.message || 'Error updating favorites';
          console.error( message );
          toast.error(message);
        }
      };

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
                        onChange={toggleFavorite}
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