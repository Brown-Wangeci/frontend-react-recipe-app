import styles from './instructions.module.css';
import bullet from './check-mark.webp';

const Instructions = ({instructions}) => {


    return ( 
        <div className={styles.instructions}>
            <h1 className={styles.h1}>Instructions</h1>
            <hr className={styles.hr}/>
            {
                instructions && 
                <ol className={styles.ol}>
                    {instructions.map( (instruction, index) => 
                        <li key={index} className={styles.li}>
                            <div className={styles.step}>
                                <img src={bullet} className={styles.bullet} alt="bulleting" />
                                <span className={styles.number}>Step: {index+1}</span>
                            </div>
                            <p className={styles.instruction}>{instruction}</p>
                        </li>
                    )}
                </ol>
            }
        </div>
     );
}
 
export default Instructions;