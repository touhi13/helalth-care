import React from 'react';
import "./Doctor.css"

const Doctor = (props) => {
    const { id, title, image, specialty } = props.doctor;
    return (
        <div className="col-lg-4 col-md-2 col">
            <div className="card me-3">
                <div className="card-images">
                     <img src={image} className="card-img-top" alt="..." />
                     <h5 className="card-titles bg-primary">{title}</h5>
                </div>
               
                <div className="card-body">
                    <p className="fw-bold">{specialty}</p>
                </div>
            </div>
        </div>
    );
};

export default Doctor;