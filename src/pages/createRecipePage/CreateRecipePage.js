import CreatePreparationDetails from '../../components/createPreparationDetails/CreatePreparationDetails';
import CreateRecipe from '../../components/createRecipe/CreateRecipe';
import styles from './createrecipepage.module.css';

const CreateRecipePage = () => {
    return ( 
        <div className={styles.createRecipePage}>
            <CreatePreparationDetails/>
            {/* <CreateRecipe/> */}
        </div>
     );
}
 
export default CreateRecipePage;