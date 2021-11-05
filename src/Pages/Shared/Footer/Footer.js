import React from 'react';
import './Footer.css'

const Footer = () => {
    return (

        <div className='footer-section'>
            <div className="footer-container mt-5 container">
                <div className="row">
                    <div className="col-lg-4">
                        <h1>About Us</h1> <hr />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim inventore et illum possimus ad perferendis sunt unde fugit expedita doloribus!</p>
                    </div>
                    <div className="col-lg-4">
                        <h1>Quick Link</h1>
                        <p>Home</p>
                        <p>Hotel</p>
                        <p>Flights</p>
                        <p>Blog</p>
                    </div>
                    <div className="col-lg-4">
                        <h1>Newsletter</h1>
                        <input placeholder='email' className='email' type="email" name="" id="" /> <br />
                        <button className='button'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;