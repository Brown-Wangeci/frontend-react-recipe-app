import ArrowDown from '../../components/arrowDown/ArrowDown';
import GeneratedCard from '../../components/generatedcard/GeneratedCard';
import styles from './recipespage.module.css';
import {useState,  useEffect} from 'react';
import axios from 'axios';
import FilterBySection from '../../components/filterBySection/FilterBySection';


const RecipesPage = () => {
    const [recipesState, setRecipesState] = useState([]);

    const fetchRecipes = async () => {
        try {
            const response = await axios.get('http://localhost:3001/recipes');
            console.log('Hello',response.data)
            setRecipesState(response.data);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(()=>{
        fetchRecipes();
    },[]);


    return ( 
        <div className={styles.recipesPage}>
            <div className={styles.searchBar}>
                <input className={styles.searchInput} type="text" placeholder="Search for recipe by name..." />
                <button className={styles.searchButton}>Search</button>
            </div>
            <div className={styles.content}>
                <div className={styles.filterSection}>
                    <FilterBySection/>
                </div>
                <div className={styles.recipeCards}>
                    {
                        recipesState && recipesState.map((recipe, index) => {
                            return <GeneratedCard key={index} recipe={recipe} />
                        })
                    }
                </div>
            </div>
            <ArrowDown bottom='20px' left='20px'/>
        </div>
     );
}
 
export default RecipesPage;