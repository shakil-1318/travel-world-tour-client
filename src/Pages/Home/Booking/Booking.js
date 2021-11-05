import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';


const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})
    const { user } = useAuth();



    useEffect(() => {
        fetch(`http://localhost:5000/singleService/${serviceId}`)
            .then(res => res.json())
            .then(data => {

                setService(data)

            })
    }, [])


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        alert('addeded')
        const email = user.email;
        data.email = email
        data.status = 'pending';


        fetch("http://localhost:5000/confirmOrder", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {

            })

    }




    return (

        <>
            <h1 className='text-center m-5'>Order Place</h1>
            <div className="booking-container container">
                <div className="row ">
                    <div className="col-lg-6">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={service?.img} />
                            <Card.Body>
                                <Card.Title>{service?.tour}</Card.Title>
                                <p className='text-primary'>Price: {service?.price}</p>
                                <Card.Text>
                                    {service?.description}
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-container">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    {...register("tour")}
                                    defaultValue={service?.tour}
                                    className="p-2 m-2 w-100"
                                />
                                <br />

                                <input
                                    {...register("date")}

                                    type="date"
                                    className="p-2 m-2 w-100"
                                />
                                <br />
                                <textarea
                                    {...register("description")}
                                    defaultValue={service?.description}
                                    className="p-2 m-2"
                                    className="p-2 m-2 w-100"
                                />
                                <br />

                                <input
                                    {...register("price", { required: true })}
                                    defaultValue={service?.price}
                                    className="p-2 m-2"
                                    className="p-2 m-2 w-100"
                                />
                                <br />
                                <input
                                    {...register("image", { required: true })}
                                    defaultValue={service?.img}
                                    className="p-2 m-2"
                                    className="p-2 m-2 w-100"
                                />
                                <br />

                                {errors.exampleRequired && <span>This field is required</span>}

                                <input
                                    type="submit"
                                    value="Order Now"
                                    className="btn btn-success w-50"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Booking;