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
        if (key === 'ingredients' || key === 'instructions') {
            formData.append(key, JSON.stringify(recipeData[key])); // Convert arrays to JSON
        } else {
            formData.append(key, recipeData[key]);
        }
        });

        try {
            const response = await axios.post( url, formData, {
                headers: {
                    'Authorization': `Bearer ${userToken}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Recipe saved:', response.data);
            // Optionally, handle success (e.g., update UI, reset form)
            toast.success(response.data.message);
        } catch (error) {
            console.error('Error saving recipe:', error);
            // Optionally, show an error message to the user
            toast.error(error.message);
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