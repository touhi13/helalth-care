import React from 'react';

const WhatWeDo = () => {
    return (
        <>
            <div className="col-xxl-8 py-5 about">
                <div className="row flex-lg-row align-items-center g-5 py-5 ">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <div className="servicelist">
                            <h3 className="pb-3">Our Services</h3>
                            <ul>
                                <li><i className="fa fa-circle me-2"></i> Laboratory testing</li>
                                <li><i className="fa fa-circle me-2"></i> COVID-19  Services</li>
                                <li><i className="fa fa-circle me-2"></i> Family Physicians</li>
                                <li><i className="fa fa-circle me-2"></i> Emergency Team</li>
                                <li><i className="fa fa-circle me-2"></i> Pediatricians</li>
                                <li><i className="fa fa-circle me-2"></i> General Surgeons</li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5">
                        <h2 className="display-5 fw-bold lh-1 mb-4 text-center">What we do</h2>
                        <p className="lead mb-1">To build a legacy of accessible, high quality, safe private healthcare for low and middle-income patients in emerging markets.</p>
                        <div className="">
                            <ul className="list-unstyled mt-3 mb-4 ">
                                <li className="py-2"> <i className="fas fa-user-md fs-1 me-3"></i> Get a doctor's consultation if You have any question
                                </li>
                                <li className="py-2"> <i className="fas fa-briefcase-medical fs-1 me-3"></i>Safe and Effective</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhatWeDo;