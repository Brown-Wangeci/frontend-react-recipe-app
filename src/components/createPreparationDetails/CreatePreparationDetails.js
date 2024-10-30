import styles from './createpreparationdetails.module.css';

const CreatePreparationDetails = () => {
    return ( 
        <div className={styles.createPreparationDetails}>
            <fieldset className={styles.fieldset}>
                <legend className={styles.legend}><span>Preparation Details</span></legend>
                <div className={styles.formSection}>
                    <div className={styles.inputBlock}>
                        <label className={styles.label} htmlFor="preparation-time">Preparation Time</label>
                        <input className={styles.input} type="number" id="preparation-time" name="preparation-time"/>
                    </div>
                    <div className={styles.inputBlock}>
                        <label className={styles.label} htmlFor="cooking-time">Cooking Time</label>
                        <input className={styles.input} type="number" id="cooking-time" name="cooking-time"/>
                    </div>
                    <div className={styles.inputBlock}>
                        <label className={styles.label} htmlFor="budget">Budget</label>
                        <input className={styles.input} type="number" id="budget" name="budget"/>
                    </div>
                    <div className={styles.inputBlock}>
                        <label className={styles.label} htmlFor="serving">Serving</label>
                        <input className={styles.input} type="number" id="serving" name="serving"/>
                    </div>
                </div>
            </fieldset>
        </div>
     );
}
 
export default CreatePreparationDetails;