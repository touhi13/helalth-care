import React from 'react';
import '../Login/Login/Login.css';
import logo from '../../Images/vaxx-logo2.png'
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Login = () => {
    const { signInUsingGoogle,handleNameChange,handleEmailChange,handlePasswordChange,handleRegistration } = useAuth();

    return (
        <div className="vaxx-form text-center">
            <div className="form-signin">                
                    <img className="mb-4 img-fluid" src={logo} alt=""  />
                    <h1 className="h3 mb-3 fw-normal">Please Register</h1>
                    <button className="w-100 btn btn-lg btn-outline-primary mb-3" onClick={signInUsingGoogle}> <i class="fab fa-google pe-2"></i>Sign in With Google</button>
                    <div className="form-34or">
                        <span className="pros">
                            <span>OR</span>
                        </span>
                    </div>
                    <form onSubmit={handleRegistration}>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput3" placeholder="Jhon Doe" onBlur={handleNameChange}/>
                        <label htmlFor="floatingInput3">Full Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"onBlur={handleEmailChange} />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"  onBlur={handlePasswordChange}/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p className="mb-3 text-muted">Already Registered? <Link to="/Login"><span>Login</span></Link></p>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </form>
            </div>
        </div>
    );
};

export default Login;