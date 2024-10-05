import ArrowDown from '../../components/arrowDown/ArrowDown';
import GeneratedCard from '../../components/generatedcard/GeneratedCard';
import styles from './recipespage.module.css';
import {useState,  useEffect} from 'react';
import axios from 'axios';
import FilterBySection from '../../components/filterBySection/FilterBySection';


const RecipesPage = () => {
    const [recipesState, setRecipesState] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


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
            {windowWidth > 765 && <ArrowDown bottom='20px' left='20px'/>}
        </div>
     );
}
 
export default RecipesPage;