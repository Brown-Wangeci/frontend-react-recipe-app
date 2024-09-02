import styles from './Button.module.css';


const Button = ({name = 'Button', type = 'submit'}) => {
    return ( 
        <button type={type} className={styles.button}>
            <div className={styles.buttonText}>
                {name}
            </div>
        </button>
     );
}
 
export default Button;