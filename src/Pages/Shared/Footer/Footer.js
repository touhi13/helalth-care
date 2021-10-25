import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <section id="footer" className="bg-primary mt-5">
            <div className="container">
                <div className="row text-center text-xs-center text-sm-left text-md-left">
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <h5>Quick links</h5>
                        <ul className="list-unstyled quick-links">
                            <li><NavLink to="javascript:void();"><i className="fa fa-angle-double-right"></i>Home</NavLink></li>
                            <li><NavLink to="javascript:void();"><i className="fa fa-angle-double-right"></i>About</NavLink></li>
                            <li><NavLink to="javascript:void();"><i className="fa fa-angle-double-right"></i>FAQ</NavLink></li>
                            <li><NavLink to="javascript:void();"><i className="fa fa-angle-double-right"></i>Get Started</NavLink></li>
                            <li><NavLink to="javascript:void();"><i className="fa fa-angle-double-right"></i>Videos</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <h5>Quick links</h5>
                        <ul className="list-unstyled quick-links">
                            <li><NavLink to="javascript:void();"><i className="fa fa-angle-double-right"></i>Home</NavLink></li>
                            <li><NavLink to="javascript:void();"><i className="fa fa-angle-double-right"></i>About</NavLink></li>
                            <li><NavLink to="javascript:void();"><i className="fa fa-angle-double-right"></i>FAQ</NavLink></li>
                            <li><NavLink to="javascript:void();"><i className="fa fa-angle-double-right"></i>Get Started</NavLink></li>
                            <li><NavLink to="javascript:void();"><i className="fa fa-angle-double-right"></i>Videos</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <h5>Quick links</h5>
                        <ul className="list-unstyled quick-links">
                            <li><NavLink to="javascript:void();"><i className="fa fa-angle-double-right"></i>Home</NavLink></li>
                            <li><NavLink to="javascript:void();"><i className="fa fa-angle-double-right"></i>About</NavLink></li>
                            <li><NavLink to="javascript:void();"><i className="fa fa-angle-double-right"></i>FAQ</NavLink></li>
                            <li><NavLink to="javascript:void();"><i className="fa fa-angle-double-right"></i>Get Started</NavLink></li>
                            <li><NavLink to="javascript:void();"><i className="fa fa-angle-double-right"></i>Videos</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                        <ul className="list-unstyled list-inline social text-center">
                            <li className="list-inline-item"><a to="javascript:void();"><i className="fa fa-facebook"></i></a></li>
                            <li className="list-inline-item"><a to="javascript:void();"><i className="fa fa-twitter"></i></a></li>
                            <li className="list-inline-item"><a to="javascript:void();"><i className="fa fa-instagram"></i></a></li>
                            <li className="list-inline-item"><a to="javascript:void();"><i className="fa fa-google-plus"></i></a></li>
                            <li className="list-inline-item"><a to="javascript:void();" target="_blank"><i className="fa fa-envelope"></i></a></li>
                        </ul>
                    </div>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                        <p className="h6">Copyright © 2021 Medi Aid</p>
                    </div>
                    <hr />
                </div>
            </div>
        </section>
    );
};

export default Footer;