import ArrowDown from '../../components/arrowDown/ArrowDown';
import GeneratedCard from '../../components/generatedcard/GeneratedCard';
import styles from './recipespage.module.css';
import {useState,  useEffect} from 'react';
import axios from 'axios';


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
            {
                recipesState && recipesState.map((recipe, index) => {
                    return <GeneratedCard key={index} recipe={recipe} />
                })
            }
            <ArrowDown bottom='20px' left='20px'/>
        </div>
     );
}
 
export default RecipesPage;