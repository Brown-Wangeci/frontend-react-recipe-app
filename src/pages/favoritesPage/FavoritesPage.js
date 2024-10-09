import FavoritesCard from '../../components/favoritesCard/FavoritesCard';
import styles from './favoritespage.module.css';

const FavoritesPage = () => {
    return ( 
        <div className={styles.favoritesPage}>
            <h1>Favorites Page</h1>
            <FavoritesCard/>
        </div>
     );
}
 
export default FavoritesPage;