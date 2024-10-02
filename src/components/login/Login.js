import { useState } from 'react';
import styles from './login.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie'

const Login = () => {
    const navigate = useNavigate();
    const [, setCookie] = useCookies(['access_token']);

    const [userDetails, setUserDetails] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/users/login', userDetails);
            setCookie('access_token', response.data.token,);
            window.localStorage.setItem('userID', response.data.user.id);
            console.log(response);
            alert("Logged in")
            navigate('/recipes');

        } catch (error) {
            console.error(error.message);
            alert(error.message);
        }
    }
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setUserDetails((prevUserDetails)=>({
            ...prevUserDetails,
            [name]: value
        }))
    }


    return ( 
        <div className={styles.login}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <fieldset className={styles.fieldSet}>
                    <legend className={styles.legend}><span>Welcome Back!!</span></legend>
                    <div className={styles.inputBlock}>
                        <label className={styles.label} htmlFor="email">Email</label>
                        <input className={`${styles.input} ${styles.email}`}
                            type="email"
                            id="email"
                            name="email"
                            value={userDetails.email}
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.inputBlock}>
                        <label className={styles.label} htmlFor="password">Password</label>
                        <input className={styles.input}
                            type="password"
                            id="password"
                            name="password"
                            required
                            value={userDetails.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.forgot}><Link to="/reset-password">Forgot Password ?</Link></div>
                    <button className={styles.button} type="submit" ><span>Login</span></button>
                    <div className={styles.signUp}>
                        Don't have an account? <Link to="/signup">Sign Up</Link>
                    </div>
                </fieldset>
                <div className={styles.tag}>Log In</div>
            </form>
        </div>
     );
}

export default Login;