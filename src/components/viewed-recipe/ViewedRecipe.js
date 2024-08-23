import styles from './viewedRecipe.module.css';

const ViewedRecipe = () => {
    return ( 
        <div className={styles.card}>
            <img src="https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg" alt="profile" className={styles.image}/>
            <div className={styles.tags}>
                <div className={`${styles.tag} ${styles.category}`}>Beef</div>
                <div className={`${styles.tag} ${styles.area}`}>British</div>
            </div>
            <div className={styles.name}><strong>Beef and Mustard Pie</strong></div>
        </div>
    );
}
 
export default ViewedRecipe;