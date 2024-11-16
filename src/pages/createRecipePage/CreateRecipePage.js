import CreateCategories from '../../components/createCategories/CreateCategories';
import CreatePreparationDetails from '../../components/createPreparationDetails/CreatePreparationDetails';
import styles from './createrecipepage.module.css';

const CreateRecipePage = () => {
    return ( 
        <div className={styles.createRecipePage}>
            <CreatePreparationDetails/>
            <CreateCategories/>
        </div>
     );
}
 
export default CreateRecipePage;