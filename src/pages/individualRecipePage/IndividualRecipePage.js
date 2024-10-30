import styles from './individualrecipepage.module.css';
import Ingredients from '../../components/ingredients/Ingredients';
import Instructions from '../../components/instructions/Instructions';
import ArrowDown from '../../components/arrowDown/ArrowDown';
// import { RecipeMockData } from '../../mockdata/RecipeData';
import RecipeDetails from '../../components/recipeDetails/RecipeDetails';
import { useEffect,  useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const IndividualRecipePage = () => {
    const [recipeData, setRecipeData] = useState({});
    const { id } = useParams();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const url = process.env.BACKEND_URL;

    const fetchRecipe = async (id) => {
        try {
            const response = await axios.get(`${url}/recipes/${id}`);
            setRecipeData(response.data);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        if (id){
            fetchRecipe(id);
        }
    }, [id]);

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
            <div className={styles.recipeContainer}>
                <RecipeDetails recipe={recipeData}/>
                <section className={styles.ingredientsSection}>
                    <Ingredients ingredients={recipeData.ingredients}/>
                </section>
                <section className={styles.instructionsSection}>
                    <Instructions instructions={recipeData.instructions}/>
                </section>
            </div>
           {windowWidth > 810 && <ArrowDown bottom='20px' left='20px'/>}
        </div>
     );
}
 
export default IndividualRecipePage;