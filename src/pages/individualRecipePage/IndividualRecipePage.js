import styles from './individualrecipepage.module.css';
import Ingredients from '../../components/ingredients/Ingredients';
import Instructions from '../../components/instructions/Instructions';
import ArrowDown from '../../components/arrowDown/ArrowDown';
import { useEffect, useRef, useState } from 'react';


const IndividualRecipePage = () => {

    return ( 
        <div className={styles.individualRecipePage}>
            <div className={styles.recipeContainer}>
                <div className={styles.title}>
                    <h1 className={styles.h1title}>Grilled Chicken</h1>
                    <span className={styles.author}>By: Brown</span>
                </div>
                <hr className={styles.hr}/>
                <div className={styles.moreTitleDetails}>
                    <span className={styles.published}>Published:  August 21, 2024</span>
                    <span className={styles.updated}>Last updated:  November 15, 2024</span>
                </div>
                <section className={styles.imageSection}>
                    <img className={styles.image} src="https://www.themealdb.com/images/media/meals/ytuvwr1503070420.jpg" alt="Grilled Chicken" height='450' width='600' />
                    <div className={styles.recipeDetails}>
                        <div  className={styles.allTags}>
                            <div  className={styles.tagGroupOne}>
                                <span className={`${styles.tag} ${styles.category}`}>Chicken</span>
                                <span className={`${styles.tag} ${styles.cuisine}`}>Canadian</span>
                                <span className={`${styles.tag} ${styles.mealTime}`}>Dinner</span>
                            </div>
                            <div  className={styles.tagGroupTwo}>
                                <span className={`${styles.tag} ${styles.category}`}>Chicken</span>
                                <span className={`${styles.tag} ${styles.cuisine}`}>Canadian</span>
                                <span className={`${styles.tag} ${styles.mealTime}`}>Dinner</span>
                            </div>
                        </div>
                        <div className={styles.timeDetails}>
                            <span className={styles.time}>Prep Time: 15 min</span>
                            <span className={styles.time}>Cook Time: 30 min</span>
                            <span className={styles.time}>Total Time: 45 min</span>
                            <span className={styles.time}>Servings: 6</span>
                        </div>
                    </div>
                </section>
                <section className={styles.ingredientsSection}>
                    <Ingredients/>
                </section>
                <section className={styles.instructionsSection}>
                    <Instructions/>
                </section>
            </div>
            <div className={`${styles.scrollArrow} ${styles.bounce}`} ><ArrowDown/></div>
        </div>
     );
}
 
export default IndividualRecipePage;