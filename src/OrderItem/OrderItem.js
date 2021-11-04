import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


const OrderItem = (props) => {
    const { place, tour, img, quantity, description, key, price } = props.service;
    const { handleRemove } = props;

    return (
        <div className="col-lg-4 g-5 ">
            <Card className='h-100'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <p className='tour-location'><span><i class="fas fa-map-marker-alt"></i></span> {tour}</p>
                    <p>Ticket quantity:{quantity}</p>
                    <h4 className='tour-location'>${price}</h4>
                    <Card.Title>{place}</Card.Title> <br />
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button onClick={() => handleRemove(key)} variant="danger" >Remove Item</Button>
                </Card.Body>
            </Card>

        </div >
    );
};

export default OrderItem;