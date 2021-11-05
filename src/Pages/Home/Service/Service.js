import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'
import Button from 'react-bootstrap/Button';


const Service = (props) => {
    const { _id, img, tour, place, price, description } = props.service
    return (
        <div className="col-lg-4 g-5 ">
            <Card className='h-100'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <p className='tour-location'><span><i class="fas fa-map-marker-alt"></i> {place}</span></p>
                    <h4 className='tour-location'>{tour}</h4>
                    <Card.Title>Price: $ {price}</Card.Title> <br />
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Link to={`/booking/${_id}`}>
                        <Button className='btn btn-success'>add to cart</Button>
                    </Link>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Service;