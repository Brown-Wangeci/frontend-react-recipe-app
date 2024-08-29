import styles from './login.module.css';

const Login = () => {
    return ( 
        <div className={styles.login}>
            <form className={styles.form} action="">
                <fieldset className={styles.fieldSet}>
                    <legend className={styles.legend}>Welcome Back</legend>
                    <div className={styles.inputBlock}>
                        <label className={styles.label} htmlFor="email">Email</label>
                        <input className={`${styles.input} ${styles.email}`} type="email" id="email" name="email" required />
                    </div>
                    <div className={styles.inputBlock}>
                        <label className={styles.label} htmlFor="password">Password</label>
                        <input className={styles.input} type="password" id="password" name="password" required />
                    </div>
                    <div className={styles.forgot}><a href="#">Forgot Password ?</a></div>
                    <button className={styles.button} type="submit">Login</button>
                    <div className={styles.signUp}>
                        Don't have an account? <a href="#">Sign Up</a>
                    </div>
                </fieldset>
            </form>
        </div>
     );
}
 
export default Login;