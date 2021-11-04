import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../../utilities/fakedb';
import MyOrder from '../../MyOrder/MyOrder';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    const [order, setOrder] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    useEffect(() => {
        if (services.length) {
            const savedOrder = getStoredCart();
            const storedOrder = [];
            for (const key in savedOrder) {
                const addedService = services.find(service => service.key === key);
                if (addedService) {
                    const quantity = savedOrder[key];
                    addedService.quantity = quantity;
                    storedOrder.push(addedService);
                }

            }
            setOrder(storedOrder)
        }

    }, [services])

    const handleAddToOrder = service => {
        const newOrder = [...order, service]
        setOrder(newOrder);
        // save to local storage for now

        addToDb(service.key);
    }


    // order result
    let totalQuantity = 0;
    let total = 0;
    for (const booking of order) {
        if (!booking.quantity) {
            booking.quantity = 1;
        }
        else {
            total = total + booking.price * booking.quantity;
            totalQuantity = totalQuantity + booking.quantity;
        }
    }


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
                            key={service.key}
                            service={service}
                            handleAddToOrder={handleAddToOrder}
                        ></Service>)
                    }
                </div>
            </div>
            <div className="oredr-container ">
                <h1>order summary</h1>
                <h3>items order:{totalQuantity} </h3>
                <p>Total = {total}</p>
            </div>
        </div>
    );
};

export default Services;