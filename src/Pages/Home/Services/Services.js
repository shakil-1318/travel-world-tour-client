import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);



    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className='container' id='service'>

            <div className="service-content text-center">
                <h1>Perfect <span className='unique-color'>Tour Packages</span></h1>
                <p>Travel has helped us to understand the meaning of life and it has helped us <br /> become better people. Each time we travel, we see the world with new eyes.</p>
            </div>
            <div className="row">
                <div className="service-container row">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}

                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;