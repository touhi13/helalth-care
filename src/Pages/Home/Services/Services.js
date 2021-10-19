import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data);
            });
    }, []);

    return (

        <div className="container text-center my-5">
            <h1 className="my-5">Our services</h1>
            <div className="card-group row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                {services.map(service => <Service
                    key={service.key}
                    service={service}
                >
                </Service>)
                }

            </div>
        </div>

    );
};

export default Services;