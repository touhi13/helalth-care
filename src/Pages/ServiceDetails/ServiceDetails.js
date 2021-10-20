import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';


const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const history = useHistory();
    console.log()
    return (
        <div>
            
        </div>
    );
};

export default ServiceDetails;