import styles from './signup.module.css';

const SignUp = () => {
    return ( 
        <div className={styles.signup}>
            <form className={styles.form} action="">
                <fieldset className={styles.fieldSet}>
                    <legend className={styles.legend}>Welcome !!</legend>
                    <div className={styles.main}>
                        <div className="sec">
                            <div className={styles.inputBlock}>
                                <label className={styles.label} htmlFor="email">Email</label>
                                <input className={`${styles.input} ${styles.email}`} type="email" id="email" name="email" required />
                            </div>
                            <div className={styles.inputBlock}>
                                <label className={styles.label} htmlFor="password">Password</label>
                                <input className={styles.input} type="password" id="password" name="password" required />
                            </div>
                        </div>
                        <div className="sec">
                            <div className={styles.inputBlock}>
                                <label className={styles.label} htmlFor="email">Email</label>
                                <input className={`${styles.input} ${styles.email}`} type="email" id="email" name="email" required />
                            </div>
                            <div className={styles.inputBlock}>
                                <label className={styles.label} htmlFor="password">Password</label>
                                <input className={styles.input} type="password" id="password" name="password" required />
                            </div>
                        </div>
                    </div>
                    <button className={styles.button} type="submit">Sign Up</button>
                    <div className={styles.logIn}>
                        Already have an account? <a href="#">Log in</a>
                    </div>
                </fieldset>
            </form>
        </div>
     );
}
 
export default SignUp;