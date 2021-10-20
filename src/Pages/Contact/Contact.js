import React from 'react';
const Contact = () => {
    return (
        <>
            <div className="col-xxl-8 mx-5 py-5">
                <div className="row flex-lg-row align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="https://i.ibb.co/RQY3dq4/placeholder-3.webp" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="display-5 fw-bold lh-1 mb-3">Diagnostic Center “Vaxi”</h2>
                        <p className="lead mb-1"><i className="fas fa-map-marker-alt me-2"></i>3396 Flint Street Atlanta, GA 30329</p>
                        <p className="lead mb-1"><i className="fas fa-clock me-2"></i>9 a.m. to 5 p.m</p>
                        <p className="lead mb-1"><i className="fas fa-phone-alt me-2"></i>+1 678-235-5649</p>
                    </div>
                </div>
            </div>
            <div className="col-xxl-8 mx-5 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="https://i.ibb.co/GnyT9wj/placeholder-4.webp" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="display-5 fw-bold lh-1 mb-3">Laboratory</h2>
                        <p className="lead mb-1"><i className="fas fa-map-marker-alt me-2"></i>3396 Flint Street Atlanta, GA 30329</p>
                        <p className="lead mb-1"><i className="fas fa-clock me-2"></i>9 a.m. to 5 p.m</p>
                        <p className="lead mb-1"><i className="fas fa-phone-alt me-2"></i>+1 678-235-5649</p>
                    </div>
                </div>
            </div>

            <div className="col-xxl-8 py-5 contact-box ">
                <div className="row flex-lg-row align-items-center g-5 py-5 ">
                    <div className="col-10 col-sm-8 col-lg-6">
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5">
                    <h2 className="display-5 fw-bold lh-1 mb-4 text-center">Request a quote</h2>

                        <form className="p-4 p-md-5 border rounded-3 bg-light">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput5" placeholder="Jhon Doe" />
                                <label htmlFor="floatingInput5">Full Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control custom-text-box" id="floatingTextarea"/>
                                <label htmlFor="floatingTextarea">Message</label>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Contact;