import React from 'react';
import '../Login/Login.css';
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useHistory } from 'react-router-dom';

const Login = () => {
    const { signInUsingGoogle,handleEmailChange,handlePasswordChange, processLogin } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    const handleSignIn= (e) => {
        e.preventDefault();
        processLogin()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="vaxx-form text-center">
            <div className="form-signin">                
                    <img className="mb-4 img-fluid" src="https://i.ibb.co/Gt4mZZ7/medic-152458-1280.png" alt=""  />
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <button className="w-100 btn btn-lg btn-outline-primary mb-3" onClick={handleGoogleLogin}> <i className="fab fa-google pe-2"></i>Sign in With Google</button>
                    <div className="form-34or">
                        <span className="pros">
                            <span>OR</span>
                        </span>
                    </div>
                    <form>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"onBlur={handleEmailChange} />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"  onBlur={handlePasswordChange}/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" onClick={handleSignIn}>Login</button>
                    <p className="mb-3 text-muted">Have not an account yet? <Link to="/register"><span>Register</span></Link></p>

                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </form>
            </div>
        </div>
    );
};

export default Login;