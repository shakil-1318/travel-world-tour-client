import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './Service.css'

const Service = (props) => {
    // console.log(props);
    const { key, tour, img, place, description, price } = props.service;



    return (
        <div className="col-lg-4 g-5 ">
            <Card className='h-100'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <p className='tour-location'><span><i class="fas fa-map-marker-alt"></i></span> {tour}</p>
                    <h4 className='tour-location'>${price}</h4>
                    <Card.Title>{place}</Card.Title> <br />
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button onClick={() => props.handleAddToOrder(props.service)} className='order-btn'>Buy Now</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Service;