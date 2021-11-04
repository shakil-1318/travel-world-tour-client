import React from 'react';
import useOrder from '../../hooks/useOrder';
import useServices from '../../hooks/useServices';
import OrderItem from '../../OrderItem/OrderItem';
import { deleteFromDb } from '../../utilities/fakedb';

const MyOrder = () => {
    const [services, setServices] = useServices();
    const [order, setOrder] = useOrder(services);

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

    const handleRemove = key => {
        const newOrder = order.filter(service => service.key !== key)
        setOrder(newOrder)
        deleteFromDb(key);
    }


    return (
        <div className='container'>
            <div className="text-center">
                <h1>My order list: {totalQuantity}</h1>
                <h2>Total Purchase money: {total}</h2>
            </div>
            <div className="row">
                {
                    order.map(service => <OrderItem
                        key={service.key}
                        service={service}
                        handleRemove={handleRemove}
                    ></OrderItem>)
                }
            </div>
        </div>
    );
};

export default MyOrder;