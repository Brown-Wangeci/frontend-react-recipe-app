import styles from './createrecipepage.module.css';
import RecipeForm from '../../components/recipeForm/RecipeForm';
import axios from 'axios';
import { toast } from 'sonner';
import useUser from '../../hooks/useUser';

const CreateRecipePage = () => {
    const url = process.env.REACT_APP_BACKEND_URL + '/recipes' ;
    const { userToken } = useUser();

    const handleSaveRecipe = async (recipeData) => {
        const formData = new FormData();
        Object.keys(recipeData).forEach((key) => {
            formData.append(key, recipeData[key]);
        });

        try {
            const response = await axios.post( url, formData, {
                headers: {
                    'Authorization': `Bearer ${userToken}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            const message = 'Recipe saved successfully';
            console.log(message, response.data);
            toast.success(message);
        } catch (error) {
            console.error('Error saving recipe:', error);
            toast.error('Error saving recipe');
        }
    };



    return ( 
        <div className={styles.createRecipePage}>
            <h1 className={styles.title}>Create Recipe</h1>
            <RecipeForm onSaveRecipe={handleSaveRecipe}/>
        </div>
     );
}
 
export default CreateRecipePage;