import styles from './instructions.module.css';

const Instructions = () => {
    return ( 
        <div className={styles.instructions}>
            <h2>Instructions:</h2>
            <p>1. Preheat oven to 350 degrees F (175 degrees C). Grease and flour a 9x9 inch pan or line with parchment paper.</p>
            <p>2. In a medium bowl, cream together the sugar and butter. Beat in the eggs, one at a time, then stir in the vanilla. Combine flour and baking powder, add to the creamed mixture and mix well. Finally stir in the milk until batter is smooth. Pour or spoon batter into the prepared pan.</p>
            <p>3. Bake for 30 to 40 minutes in the preheated oven. Cake is done when it springs back to the touch.</p>
        </div>
     );
}
 
export default Instructions;