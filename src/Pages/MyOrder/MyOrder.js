import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner'
import Footer from '../Shared/Footer/Footer';




const MyOrder = () => {
    const [services, setServices] = useState([])



    const { user, isLoading } = useAuth();
    const email = user?.email;


    useEffect(() => {
        fetch(`https://murmuring-river-32108.herokuapp.com/myOrders/${email}`)
            .then(res => res.json())
            .then(data => {

                setServices(data)

            })
    }, [])

    const handleDelete = (id) => {
        const procceed = window.confirm('are you sure want to delete');

        if (procceed) {
            fetch(`https://murmuring-river-32108.herokuapp.com/delete/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount) {
                        alert('Delete');
                        const remaining = services.filter(service => service._id !== id)
                        setServices(remaining);
                    }

                })
        }

    }



    return (
        <>
            <div className='container'>
                {
                    !services.length && <h1 className='text-center m-3'>You have no order yet!</h1> || <h1 className='text-center m-3'>My Order</h1>
                }

                <div className="row">
                    {
                        services.map(service => (
                            <div className="col-lg-4" key={service._id}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={service?.image} />
                                    <Card.Body>
                                        <Card.Title>{service?.tour}</Card.Title>
                                        <Card.Text>
                                            {service?.description}
                                        </Card.Text>
                                        <Button onClick={() => handleDelete(service?._id)} variant="danger">DELETE</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default MyOrder;