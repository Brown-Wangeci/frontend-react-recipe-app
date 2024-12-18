import styles from './recipedetails.module.css';
import PreparationDetails from '../preparationDetails/PreparationDetails';
import asterisk from './asterisk_24dp_FFFF55_FILL0_wght400_GRAD0_opsz24.webp';



const RecipeDetails = ({recipe}) => {

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return ( 
        <div className={styles.recipeDetailsContainer}>
            <div className={styles.title}>
                <h1 className={styles.h1title}>{recipe.name}</h1>
                <span className={styles.author}>By: <span className={styles.innerAuthor}>{recipe.creator?.username}</span></span>
            </div>
            <hr className={styles.hr}/>
            <div className={styles.moreTitleDetails}>
                <span className={styles.published}>Published:  <span className={styles.innerPublished}>{formatDate(recipe.updatedAt)}</span></span>
                <span className={styles.updated}>Last updated:  <span className={styles.innerUpdated}>{formatDate(recipe.createdAt)}</span></span>
            </div>
            <section className={styles.recipeDetailsSection}>
                <img className={styles.image} src={recipe.image} alt={recipe.title}  />
                <div className={styles.recipeDetails}>
                    <div  className={styles.allTags}>
                        <div  className={styles.tagGroupOne}>
                            <span className={`${styles.tag} ${styles.category}`}>{recipe.category}</span>
                            <span className={`${styles.tag} ${styles.cuisine}`}>{recipe.cuisine}</span>
                            <span className={`${styles.tag} ${styles.mealTime}`}>{recipe.mealtime}</span>
                        </div>
                        <div  className={styles.tagGroupTwo}>
                            <span className={`${styles.tag} ${styles.method}`}>{recipe.method}</span>
                            <span className={`${styles.tag} ${styles.course}`}>{recipe.course}</span>
                            <span className={`${styles.tag} ${styles.diet}`}>{recipe.diet}</span>
                        </div>
                    </div>
                    <div className={styles.note}>
                        <img className={styles.asterisk} src={asterisk} alt="asterisk" />
                        <div className={styles.noteContent}><span>{recipe.note}</span></div>
                    </div>
                    <div className={styles.preparationDetails}>
                        <PreparationDetails recipe={recipe}/>
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default RecipeDetails;