import { useState } from 'react';
import styles from './login.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import { toast } from 'sonner';

const Login = () => {
    const url = process.env.REACT_APP_BACKEND_URL;
    const navigate = useNavigate();

    const { setUserToken } = useUser();
    const [userDetails, setUserDetails] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await axios.post(`${url}/users/login`, userDetails);
            if(response.data.token){
                setUserToken(response.data.token);
                localStorage.setItem('token', response.data.token);
            };
            console.log(response.data.message);
            toast.success(response.data.message);
            navigate('/recipes');

        } catch (error) {
            const message = error?.response?.data?.message || 'Login failed';
            console.error( message );
            toast.error(message);
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