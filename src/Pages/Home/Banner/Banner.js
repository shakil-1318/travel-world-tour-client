import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner1 from '../../../images/banner/banner1_edited.jpg'
import banner2 from '../../../images/banner/banner2_edited.jpg'
import banner3 from '../../../images/banner/banner3_edited.jpg'
import destination1 from '../../../images/destination/destination3.jpg'
import destination2 from '../../../images/destination/destination4.jpg'
import destination3 from '../../../images/destination/destination5.jpg'
import destination4 from '../../../images/destination/destination6.jpg'
import destination5 from '../../../images/destination/destination7.jpg'
import destination6 from '../../../images/destination/destination12.jpg'


const Banner = () => {
    return (
        <div id='home'>
            <Carousel fade >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"

                    />
                    <Carousel.Caption className='banner-caption'>
                        <h1>Make you Free to travel with us</h1>
                        <p>Feel Free To Travel</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='banner-caption'>
                        <h1>Sensation Ice Trip Is Coming</h1>
                        <p>Trip for your kids</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='banner-caption'>
                        <h1>Explore Your Life Where You Want</h1>
                        <p>Amazing Places</p>
                    </Carousel.Caption>

                </Carousel.Item>
            </Carousel>
            <div className="destination-section">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-6 col-sm-12 destination-context">
                        <p>About Travel World</p>
                        <h1>We're truely dedicated to make your travel experience best</h1>
                        <p><small>Top Tour Operators and Travel Agency. We offering in total 793 tours and holidays throughout the world. Combined we have received 1532 customer reviews and an average rating of 5 out of 5 stars.</small></p>
                        <p><small>Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.</small></p>
                        <div className='destination-img'>
                            <img width='100' src={destination1} alt="" />
                            <img width='100' src={destination2} alt="" />
                            <img width='100' src={destination3} alt="" />
                            <img width='100' src={destination4} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <img className='img-fluid' src={destination6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;