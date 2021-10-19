import React from 'react';

const Service = (props) => {
    const { id, title, image } = props.service;
    return (
        <div className="col-lg-4 col-md-2 col">
            <div className="card me-3">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <a class="btn btn-outline-primary" href="#">View Details</a>
                </div>
            </div>
        </div>
    );
};

export default Service;