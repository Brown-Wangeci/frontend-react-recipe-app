import styles from './ingredients.module.css';

const Ingredients = () => {

    const ingredients = [
        {id: 1, text: '1 cup of flour'},
        {id: 2, text: '1 cup of sugar'},
        {id: 3, text: '1 cup of milk'},
        {id: 4, text: '1 cup of butter'},
        {id: 5, text: '1 cup of eggs'},
        {id: 6, text: '1 cup of baking powder'},
        {id: 7, text: '1 cup of salt'},
        {id: 8, text: '1 cup of vanilla extract'},
        {id: 9, text: '1 cup of chocolate chips'},
        {id: 10, text: '1 cup of nuts'}
    ]

    return ( 
        <div className={styles.card}>
            <h1 className={styles.h1}>Ingredients</h1>
            {ingredients && 
            <ul className={styles.ul}>
                {ingredients.map( ingredient => 
                <li key={ingredient.id} className={styles.li}>{ingredient.text}</li>
                )}
            </ul>}
        </div>
     );
}

export default Ingredients;