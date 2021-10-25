import React from 'react';
import { NavLink } from 'react-router-dom';

const Service = (props) => {
    const { id, title, image, description } = props.service;
    return (
        <div className="col-lg-4 col-md-2 col">
            <div className="card me-3">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <NavLink className="btn btn-outline-primary mt-2" to={`/service/${id}`}>View Details</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Service;