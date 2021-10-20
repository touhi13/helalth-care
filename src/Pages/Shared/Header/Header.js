import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <header className="p-3 bg-primary text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">

                        <li><NavLink to="/" className="nav-link px-2 text-white">Home</NavLink></li>
                        <li><NavLink to="/about" className="nav-link px-2 text-white">About</NavLink></li>
                        <li><NavLink to="/contact" className="nav-link px-2 text-white">Contact</NavLink></li>


                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                    </form>
                    {user?.email ?
                        <div className="dropdown text-end">
                            <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                            </a>
                            <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                                <li><a className="dropdown-item" href="#">New project...</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#" onClick={logOut}>Sign out</a></li>
                            </ul>
                        </div> :
                        <div className="text-end">
                            <Link to="/login">
                                <button type="button" className="btn btn-outline-light me-2">Login</button>
                            </Link>
                            <Link to="/register">
                                <button type="button" className="btn btn-warning me-2">Register</button>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;