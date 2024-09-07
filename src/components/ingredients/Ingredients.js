import styles from './ingredients.module.css';
import { RecipeMockData } from '../../mockdata/RecipeData';
import bullet from './arrow-right.png';

const Ingredients = () => {

    const ingredients = RecipeMockData[0].ingredients;


    return ( 
        <div className={styles.card}>
            <h1 className={styles.h1}>Ingredients</h1>
            <hr />
            {ingredients && 
            <ul className={styles.ul}>
                {ingredients.map( (ingredient, index) => 
                    <li key={index} className={styles.li}>
                        <img className={styles.bullet} src={bullet} alt='bulleting'></img>
                        <span className={styles.spanList}>{ingredient}</span>
                    </li>
                )}
            </ul>}
        </div>
     );
}

export default Ingredients;