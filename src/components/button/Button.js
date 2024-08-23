import styles from './Button.module.css';


const FavouriteButton = () => {
    return ( 
        <button className={styles.button}>
            <div className={styles.buttonText}>
                View Recipe
            </div>
        </button>
     );
}
 
export default FavouriteButton;