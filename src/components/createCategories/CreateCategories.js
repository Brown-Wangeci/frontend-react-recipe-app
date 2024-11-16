import styles from './createcategories.module.css';

const CreateCategories = () => {
    return ( 
        <div className={styles.createCategories}>
            <fieldset className={styles.fieldset}>
                <legend className={styles.legend}><span>Categories</span></legend>
                <div className={styles.formSection}>
                <div className={styles.inputBlock}>
                        <label className={styles.label} htmlFor="category">Category</label>
                        <input className={styles.input} type='text' id="category" name="category"/>
                    </div>
                    <div className={styles.inputBlock}>
                        <label className={styles.label} htmlFor="cuisine">cuisine</label>
                        <input className={styles.input} type="number" id="cuisine" name="cuisine"/>
                    </div>
                    <div className={styles.inputBlock}>
                        <label className={styles.label} htmlFor="budget">Budget</label>
                        <input className={styles.input} type="number" id="budget" name="budget"/>
                    </div>
                    <div className={styles.inputBlock}>
                        <label className={styles.label} htmlFor="serving">Serving</label>
                        <input className={styles.input} type="number" id="serving" name="serving"/>
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
 
export default CreateCategories;