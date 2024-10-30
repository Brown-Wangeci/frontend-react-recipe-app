import ArrowDown from '../../components/arrowDown/ArrowDown';
import GeneratedCard from '../../components/generatedcard/GeneratedCard';
import styles from './recipespage.module.css';
import {useState,  useEffect} from 'react';
import axios from 'axios';
import FilterBySection from '../../components/filterBySection/FilterBySection';


const RecipesPage = () => {
    const [recipesState, setRecipesState] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filters, setFilters] = useState({});
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const url = process.env.BACKEND_URL;


    const fetchRecipes = async () => {
        try {
            const response = await axios.get(`${url}/recipes`);
            console.log('Hello',response.data)
            setRecipesState(response.data);
            setFilteredRecipes(response.data);
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

    const handleFiltersChange = (selectedFilters) => {
        setFilters(selectedFilters);
        console.log(selectedFilters);
      };

    // Filter Functionality

    // For the search input
    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
        if (searchTerm === "" || searchTerm === null || searchTerm === undefined) {
            setFilteredRecipes(recipesState);
        }else {
            const filtered = recipesState.filter((recipe) => {
                return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
            });
            setFilteredRecipes(filtered);
        }
    }
    

    useEffect(() => {
        if (filters && Object.keys(filters).length > 0) {
          const filtered = recipesState.filter((recipe) => {
            return (
              (filters.meal_type ? filters.meal_type.includes(recipe.mealtime.toLowerCase()) : true) &&
              
              (filters.budget ? filters.budget === getBudgetCategory(recipe.budget) : true) &&
      
              (filters.cuisine ? filters.cuisine.includes(recipe.cuisine.toLowerCase()) : true) &&
      
              (filters.dietary ? filters.dietary.includes(recipe.diet.toLowerCase()) : true) &&
      
              (filters.method_of_cooking ? filters.method_of_cooking.includes(recipe.method.toLowerCase()) : true) &&
      
              (filters.course ? filters.course.includes(recipe.course.toLowerCase()) : true) &&
              
              (filters.ingredient ? filters.ingredient.includes(recipe.category.toLowerCase()) : true) &&
              
              (filters.cooking_time ? filters.cooking_time === getCookingTimeCategory(recipe.cookingtime) : true) &&
      
              (filters.health_concerns ? filters.health_concerns.includes(recipe.diet.toLowerCase()) : true)
            );
          });
      
          setFilteredRecipes(filtered);
        } else {
          setFilteredRecipes(recipesState);
        }
      }, [filters, recipesState]);
      
      // Helper function to categorize budget into ranges
      const getBudgetCategory = (budget) => {
        if (budget <= 500) return "under_500";
        if (budget > 500 && budget <= 1000) return "500_to_1000";
        if (budget > 1000 && budget <= 1500) return "1000_to_1500";
        return "above_1500";
      };
      
      // Helper function to categorize cooking time
      const getCookingTimeCategory = (cookingtime) => {
        if (cookingtime <= 30) return "under_30";
        if (cookingtime > 30 && cookingtime <= 60) return "30_to_60";
        return "over_60";
      };
      


    return ( 
        <div className={styles.recipesPage}>
            <div className={styles.searchBar}>
                <input
                    className={styles.searchInput}
                    type="text"
                    placeholder="Search for recipe by name..."
                    value={searchTerm}
                    onChange={(e) => handleSearch(e)}
                />
                <button
                    className={styles.searchButton}>Search</button>
            </div>
            <div className={styles.content}>
                <div className={styles.filterSection}>
                    <FilterBySection onFiltersChange={handleFiltersChange}/>
                </div>
                <div className={styles.recipeCards}>
                    {
                        filteredRecipes.length > 0 ? filteredRecipes.map((recipe) => {
                            return <GeneratedCard key={recipe._id} recipe={recipe} />
                        }): <h2>No recipes found</h2>
                    }
                </div>
            </div>
            {windowWidth > 765 && <ArrowDown bottom='20px' left='20px'/>}
        </div>
     );
}
 
export default RecipesPage;