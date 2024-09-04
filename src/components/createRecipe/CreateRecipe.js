import styles from './createrecipe.module.css';

const CreateRecipe = () => {
    return ( 
        <div className={styles.createRecipe}>
            <h2>Create Recipe</h2> 
            <form className={styles.form}>
                <fieldset className={styles.fieldset}>
                    <legend>Title</legend>
                    <input className={`${styles.input}`} type="text" id="title" name="title" required/>
                </fieldset>
                <fieldset className={styles.fieldset}>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" required></textarea>
                </fieldset>
                <fieldset className={styles.fieldset}>
                    <label htmlFor="ingredients">Ingredients</label>
                    <textarea id="ingredients" name="ingredients" required></textarea>
                </fieldset>
                <fieldset className={styles.fieldset}>
                    <label htmlFor="instructions">Instructions</label>
                    <textarea id="instructions" name="instructions" required></textarea>
                </fieldset>
                <fieldset className={styles.fieldset}>
                    <label htmlFor="image">Image</label>
                    <input type="file" id="image" name="image" required/>
                </fieldset>
                <fieldset className={styles.fieldset}> 

                </fieldset>
                <fieldset className={styles.fieldset}></fieldset>
                <fieldset className={styles.fieldset}></fieldset>
            </form>
        </div>
     );
}
 
export default CreateRecipe;