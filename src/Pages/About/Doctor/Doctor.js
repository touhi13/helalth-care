import React from 'react';

const Doctor = (props) => {
    const { id, title, image } = props.doctor;
    return (
        <div className="col-lg-4 col-md-2 col">
            <div className="card me-3">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <a className="btn btn-outline-info" href="#">View Details</a>
                </div>
            </div>
        </div>
    );
};

export default Doctor;