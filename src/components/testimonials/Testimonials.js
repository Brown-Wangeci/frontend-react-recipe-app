import styles from './testimonials.module.css';

const Testimonials = () => {
    return ( 
        <div className={styles.testimonials}>
            <h1 className={styles.title}>Testimonials</h1>
            <hr className={styles.hr}/>
            <div className={styles.content}>
            </div>
        </div>
     );
}
 
export default Testimonials;