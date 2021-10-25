import React from 'react';
import './Imunisation.css'
const Imunisation = () => {
    return (
        <section id="imunisation-tips">
            <div className="text-center mb-5">
                <h4 className="display-5 fw-bold lh-1 mb-3 text-center">Imunisation tips</h4>
                <p>
                    Immunisation can help save lives, but sadly the primary healthcare systems needed to deliver immunisation are not always within the reach of all children. Countries should strengthen their healthcare systems as a matter of urgency, making progress towards Universal Health Coverage (UHC) – ensuring citizens have access to an essential package of good-quality healthcare, free at the point of use, that prioritises those furthest behind. Realising this vision calls for increased public investment in their health systems and the removal of out-of-pocket expenses, which are one of the greatest health inequalities.
                </p>
            </div>
            <div className="d-flex flex-column justify-content-between mt-5" id="imunisation">
                <div className="">
                    <div className="d-sm-flex container-fluid justify-content-around">
                        <div className="mx-5 sm:mx-0 text-center">
                            <p className=""><i className="fas fa-hand-holding-medical rounded-circle bg-white p-3 text-primary fs-3"></i></p>
                            <p className="fw-bold">Safe and effective
                            </p>
                      
                        </div>
                        <div className="mx-5 sm:mx-0 text-center" ><p><i className="fas fa-syringe rounded-circle bg-white p-3 text-primary fs-3"></i></p>
                            <p className="fw-bold">Immunity Passports</p>
            
                        </div>
                    </div>
                    <div className="d-sm-flex container-fluid justify-content-center my-5">
                        <div className="ms-5 me-5 sm:me-0 text-center" ><p><i className="fas fa-people-arrows rounded-circle bg-white p-3 text-primary fs-3"></i> </p>
                            <p className="fw-bold">Personal Protective</p>
                        </div>
                        <div className="ms-sm-auto mx-5 mx-sm-0 text-center" ><p>
                            <i className="fas fa-vial rounded-circle bg-white p-3 text-primary fs-3"></i></p>
                            <p className="fw-bold">Antibody Testing</p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Imunisation;