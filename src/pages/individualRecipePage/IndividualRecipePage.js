import styles from './individualrecipepage.module.css';
import Ingredients from '../../components/ingredients/Ingredients';
import Instructions from '../../components/instructions/Instructions';
import ArrowDown from '../../components/arrowDown/ArrowDown';
import { RecipeMockData } from '../../mockdata/RecipeData';
import RecipeDetails from '../../components/recipeDetails/RecipeDetails';
// import { useEffect, useRef, useState } from 'react';


const IndividualRecipePage = () => {
    const recipe = RecipeMockData[0];

    return ( 
        <div className={styles.individualRecipePage}>
            <div className={styles.recipeContainer}>
                <RecipeDetails recipe={recipe}/>
                <section className={styles.ingredientsSection}>
                    <Ingredients ingredients={recipe.ingredients}/>
                </section>
                <section className={styles.instructionsSection}>
                    <Instructions instructions={recipe.instructions}/>
                </section>
            </div>
            <div className={`${styles.scrollArrow} ${styles.bounce}`} ><ArrowDown/></div>
        </div>
     );
}
 
export default IndividualRecipePage;