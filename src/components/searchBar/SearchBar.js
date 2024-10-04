import styles from './searchbar.module.css';

const SearchBar = () => {
    return ( 
        <div className={styles.searchBar}>
            <input className={styles.searchInput} type="text" placeholder="Search for recipe by name..." />
        </div>
     );
}
 
export default SearchBar;