import styles from './footer.module.css';

const Footer = () => {

    const today = new Date();
    const options = { year: 'numeric' };
    const formattedDate = today.toLocaleDateString(undefined, options);


    return ( 
        <div className={styles.footer}>
            <pre><strong>&copy; {formattedDate} Cosy Recipes</strong></pre>
        </div>
     );
}
 
export default Footer;