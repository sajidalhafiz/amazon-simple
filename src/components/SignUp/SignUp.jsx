import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Success from '../Toasts/Success';
import Warning from '../Toasts/Warning';
import { AuthContext } from '../providers/AuthProvider';

const SignUp = () => {

    const { createUser, googleSignIn } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [warning, setWarning] = useState('');
    const [show, setShow] = useState(false);

    let navigate = useNavigate();

    const handleOnSubmit = event => {
        event.preventDefault();
        setWarning('');
        setSuccess('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(email, password, confirmPassword)




        if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}/.test(password)) {
            return setWarning('Your password should contain at least 1 uppercase, lowercase, digit, special-char and length 8+!');
        }
        else if (password != confirmPassword) {
            setWarning('Password and Confirm password does not matched!');
            return setTimeout(() => setWarning(''), 4000);
        }
        else {
            createUser(email, password)
                .then(result => {
                    console.log(result.user)
                    setSuccess('Welcome the Ema-john. Your are registered now.');
                    form.reset();
                    setTimeout(() => {
                        setSuccess('');
                        navigate('/login');
                    }, 4000);
                })
                .catch(error => {
                    setWarning(error.message);
                    setTimeout(() => {
                        setWarning('');
                    }, 4000);
                    form.reset();
                });
        }
    }

    return (
        <div className='form-bg'>
            <h2 className='form-title'>Sign Up</h2>
            <form className='form-container' onSubmit={handleOnSubmit}>
                <div className='input-field'>
                    <label>Email</label>
                    <input type="email" name='email' placeholder='enter your email' required />
                </div>
                <div className='input-field'>
                    <label>Password</label>
                    <div className='password-div'>
                        <input id='password' type={show ? "text" : "password"} name='password' placeholder='enter your password' required />
                        <small onClick={() => setShow(!show)} className='show-hide'>{show ? 'Hide' : 'Show'}</small>
                    </div>
                </div>
                <div className='input-field'>
                    <label>Confirm Password</label>
                    <div className='password-div'>
                        <input id='confirmPassword' type={show ? "text" : "password"} name='confirmPassword' placeholder='enter your password again' required />
                    </div>
                </div>
                <div className='form-btn'>
                    <button>Sign Up</button>
                    <small>Already have an account? <Link to='/login'>Login</Link></small>
                </div>
            </form>
            <div className='divider'>
                <hr />
                <p>or</p>
                <hr />
            </div>
            <div className='google-btn'>
                <button onClick={googleSignIn}><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="google">
                        <path id="vector" d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1443 21.8798 21.2395 23.1864L21.2128 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z" fill="#4285F4" />
                        <path id="vector_2" d="M16.2862 30C20.1433 30 23.3814 28.7555 25.7465 26.6089L21.2386 23.1865C20.0322 24.011 18.4132 24.5866 16.2862 24.5866C12.5085 24.5866 9.30219 22.1444 8.15923 18.7688L7.9917 18.7827L3.58202 22.1272L3.52435 22.2843C5.87353 26.8577 10.6989 30 16.2862 30Z" fill="#34A853" />
                        <path id="vector_3" d="M8.16007 18.769C7.85848 17.8979 7.68395 16.9645 7.68395 16.0001C7.68395 15.0356 7.85849 14.1023 8.1442 13.2312L8.13621 13.0456L3.67126 9.64746L3.52518 9.71556C2.55696 11.6134 2.0014 13.7445 2.0014 16.0001C2.0014 18.2556 2.55696 20.3867 3.52518 22.2845L8.16007 18.769Z" fill="#FBBC05" />
                        <path id="vector_4" d="M16.2863 7.4133C18.9688 7.4133 20.7783 8.54885 21.8101 9.4978L25.8418 5.64C23.3657 3.38445 20.1434 2 16.2863 2C10.699 2 5.87354 5.1422 3.52435 9.71549L8.14339 13.2311C9.30223 9.85555 12.5086 7.4133 16.2863 7.4133Z" fill="#EB4335" />
                    </g>
                </svg>
                    Continue with Google</button>
            </div>
            {/* Toasts */}
            {success && <Success success={success}></Success>}
            {warning && <Warning warning={warning}></Warning>}
        </div>
    );
};

export default SignUp;