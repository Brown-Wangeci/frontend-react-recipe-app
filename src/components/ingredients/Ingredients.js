import styles from './ingredients.module.css';

const Ingredients = () => {
    return ( 
        <div className={styles.card}>
            <h1 className={styles.h1}>Ingredients</h1>
            <ul className={styles.ul}>
                <li className={styles.li}>1 cup of flour</li>
                <li className={styles.li}>1 cup of sugar</li>
                <li className={styles.li}>1 cup of milk</li>
                <li className={styles.li}>1 cup of butter</li>
                <li className={styles.li}>1 cup of eggs</li>
                <li className={styles.li}>1 cup of baking powder</li>
                <li className={styles.li}>1 cup of salt</li>
                <li className={styles.li}>1 cup of vanilla extract</li>
                <li className={styles.li}>1 cup of chocolate chips</li>
                <li className={styles.li}>1 cup of nuts</li>
            </ul>
        </div>
     );
}
 
export default Ingredients;