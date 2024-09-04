import CreateRecipe from '../../components/createRecipe/CreateRecipe';
import styles from './createrecipepage.module.css';

const CreateRecipePage = () => {
    return ( 
        <div className={styles.createRecipePage}>
            <CreateRecipe/>
        </div>
     );
}
 
export default CreateRecipePage;