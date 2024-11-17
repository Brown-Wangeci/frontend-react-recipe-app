import styles from './individualrecipepage.module.css';
import Ingredients from '../../components/ingredients/Ingredients';
import Instructions from '../../components/instructions/Instructions';
import ArrowDown from '../../components/arrowDown/ArrowDown';
import RecipeDetails from '../../components/recipeDetails/RecipeDetails';
import { useEffect,  useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../../components/loader/Loader';


const IndividualRecipePage = () => {
    const [recipeData, setRecipeData] = useState(null);
    const { id } = useParams();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const url = process.env.REACT_APP_BACKEND_URL;
    const [loading, setLoading] = useState(false);
    const loadingTime = 200;


    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${url}/recipes/${id}`, {withCredentials: true});
                setRecipeData(response.data);
                await new Promise((resolve) => setTimeout(resolve, loadingTime));
            } catch (error) {
                console.error(error.message);
            }finally {
                setLoading(false);
            }
        };
    
        if (id) {
            fetchRecipe();
        }
    }, [id, url]);


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
        <div className={styles.individualRecipePage}>
           {loading ? (
                        <div className={styles.loading}>
                            <Loader />
                        </div>
                    ) : recipeData ? (
                        <div className={styles.recipeContainer}>
                            <RecipeDetails recipe={recipeData} />
                            <section className={styles.ingredientsSection}>
                            <Ingredients ingredients={recipeData.ingredients} />
                            </section>
                            <section className={styles.instructionsSection}>
                            <Instructions instructions={recipeData.instructions} />
                            </section>
                        </div>
                    ) : (
                        <div className={styles.noRecipeFound}>
                            <pre className={styles.noRecipe}>No recipe Here 😢</pre>
                        </div>
                    )
            }
           {windowWidth > 810 && <ArrowDown bottom='20px' left='20px'/>}
        </div>
     );
}
 
export default IndividualRecipePage;