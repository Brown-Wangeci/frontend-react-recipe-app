import styles from './preparationdetails.module.css';

const PreparationDetails = ({recipe}) => {

    return ( 
        <div  className={styles.preparationDetails}>
            {
                recipe &&
                <div className={styles.details}>
                    <div className={styles.detail}>
                        <h3 className={styles.h3}>Preparation Time</h3>
                        <p className={styles.p}>{recipe.prepTime} minutes</p>
                    </div>
                    <div className={styles.detail}>
                        <h3 className={styles.h3}>Cooking Time</h3>
                        <p className={styles.p}>{recipe.cookTime} minutes</p>
                    </div>
                    <div className={styles.detail}>
                        <h3 className={styles.h3}>Budget</h3>
                        <p className={styles.p}>Ksh. {recipe.budget}</p>
                    </div>
                    <div className={styles.detail}>
                        <h3 className={styles.h3}>Servings</h3>
                        <p className={styles.p}>{recipe.servings} people</p>
                    </div>
                </div>
            }
        </div>
     );
}
 
export default PreparationDetails;