import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';

const Services = ({headingText}) => {
    const [services] = useServices([]);
    console.log(useServices([]))
    return (
        <div className="container text-center my-5">
            <h4 className="display-5 fw-bold lh-1 mb-3 text-center my-5">{headingText}</h4>
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