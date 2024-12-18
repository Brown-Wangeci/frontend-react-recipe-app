import styles from './signup.module.css';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import { toast } from 'sonner';


const SignUp = () => {
    const url = process.env.REACT_APP_BACKEND_URL;
    const navigate = useNavigate();

    const { setUserToken } = useUser();
    const [userDetails, setUserDetails] = useState({
        username: '',
        email: '',
        password: ''
    });
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${url}/users/register`, userDetails);

            if(res.data.token){
                setUserToken(res.data.token);
                localStorage.setItem('token', res.data.token);
            }
            console.log(res.data);
            toast.success(res.data.message);
            navigate('/recipes');
        } catch (error) {
            const message = error?.response?.data?.message || 'Signup failed';
            console.error( message );
            toast.error(message);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };
    
    
    return ( 
        <div className={styles.signup}>
           <form className={styles.form} onSubmit={handleSubmit}>
                <fieldset className={styles.fieldSet}>
                    <legend className={styles.legend}><span>Welcome!!</span></legend>
                    <div className={styles.inputBlock}>
                        <label className={styles.label} htmlFor="username">User Name</label>
                        <input className={styles.input}
                            type='text'
                            id="username"
                            name="username"
                            required
                            value={userDetails.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.inputBlock}>
                        <label className={styles.label} htmlFor="email">Email</label>
                        <input className={styles.input}
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={userDetails.email}
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
                    <button className={styles.button} type="submit"><span>Sign Up</span></button>
                    <div className={styles.logIn}>
                        Already have an account? <Link to="/login">Log In</Link>
                    </div>
                </fieldset>
                <div className={styles.tag}>Sign Up</div>
            </form>
        </div>
     );
}
 
export default SignUp;