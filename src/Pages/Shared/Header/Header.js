import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import "./Header.css"

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <header className="p-3 bg-primary text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <NavLink to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none me-5">
                        <img src="https://i.ibb.co/Gt4mZZ7/medic-152458-1280.png" width="48" alt="" /> <span className="fw-bold ms-2 fs-2 logo-text">Medi-Aid</span>
                    </NavLink>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><NavLink to="" className="nav-link px-2 text-white">Home</NavLink></li>
                        <li><NavLink to="/about" className="nav-link px-2 text-white">About</NavLink></li>
                        <li><NavLink to="/contact" className="nav-link px-2 text-white">Contact</NavLink></li>


                    </ul>

                    {user?.email ?
                            <div className = "d-flex">
                                <div className="me-2"><span>Hello {user.displayName}</span> </div>
                            <div className="dropdown text-end">
                                <NavLink to="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={user.photoURL} alt="mdo" width="32" height="32" className="rounded-circle" />
                                </NavLink>
                                <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                                    {/* <li><a className="dropdown-item" href="#">New project...</a></li>
                                    <li><a className="dropdown-item" href="#">Settings</a></li>
                                    <li><a className="dropdown-item" href="#">Profile</a></li>
                                    <li><hr className="dropdown-divider" /></li> */}
                                    <li><NavLink className="dropdown-item" to="#" onClick={logOut}>Sign out</NavLink></li>
                                </ul>
                            </div>
                            </div>
                        :
                        <div className="text-end">
                            <Link to="/login">
                                <button type="button" className="btn btn-outline-light me-2">Login</button>
                            </Link>
                            <Link to="/register">
                                <button type="button" className="btn btn-success me-2">Register</button>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;