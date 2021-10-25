import React, { useEffect, useState } from 'react';
import ExtraBanner from '../Shared/ExtraBanner/ExtraBanner';
import Doctor from './Doctor/Doctor';
import WhatWeDo from './WhatWeDo/WhatWeDo';
const About = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => {
                setDoctors(data);
            });
    }, []);
    return (
        <>
            <ExtraBanner
                bannerText="About Us"
            ></ExtraBanner>
            <WhatWeDo></WhatWeDo>
            <div className="container text-center my-5">
                <h1 className="my-5">Our doctors</h1>
                <div className="card-group row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                    {doctors.map(doctor => <Doctor
                        key={doctor.key}
                        doctor={doctor}
                    >
                    </Doctor>)
                    }

                </div>
            </div>
        </>
    );
};

export default About;