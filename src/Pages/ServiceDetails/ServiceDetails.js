import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useServices from '../../hooks/useServices';
import Services from '../Home/Services/Services';
import ExtraBanner from '../Shared/ExtraBanner/ExtraBanner';


const ServiceDetails = () => {
    const { serviceId } = useParams();
    // const [service, setService] = useServices({});
    const [serviceData, setServiceData] = useServices({});
    // const history = useHistory();
    useEffect(() => {
        fetch('../services.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const filterData = data.filter(obj => {
                    return obj.id == serviceId
                });
                setServiceData(filterData);

            });
    }, []);

    return (

        <div>
            <ExtraBanner bannerText={serviceData[0]?.title}></ExtraBanner>
            {/* <!-- Page Content --> */}
            <div className="container my-5">

                {/* <!-- Portfolio Item Heading --> */}
                {/* <h1 className="my-4">Page Heading
                    <small>Secondary Text</small>
                </h1> */}

                {/* <!-- Portfolio Item Row --> */}
                <div className="row">

                    <div className="col-md-8">
                        <img className="img-fluid" src={serviceData[0]?.image} alt=""/>
                    </div>

                    <div className="col-md-4">
                        <h3 className="my-3">Description</h3>
                        <p>{serviceData[0]?.description}</p>
                        <div className="d-grid my-5 gap-2">
                        <button type="button" className="btn btn-primary btn-lg">Make Appointment</button>
                        </div>
                        {/* <h3 className="my-3"></h3> */}
                        {/* <ul>
                            <li>Lorem Ipsum</li>
                            <li>Dolor Sit Amet</li>
                            <li>Consectetur</li>
                            <li>Adipiscing Elit</li>
                        </ul> */}

                    </div>

                </div>
            </div>
            {/* <Services headingText="Our Services"></Services> */}

        </div>
    );
};

export default ServiceDetails;