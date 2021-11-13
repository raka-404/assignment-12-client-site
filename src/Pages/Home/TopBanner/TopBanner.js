import React from 'react';
import { Carousel } from 'react-bootstrap';

const TopBanner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                style={{height:'80vh',objectFit:'cover'}}
                className="d-block w-100"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/b7479764666299.5ad98abfed668.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h1 className="text-warning">Wedding Bracelets</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={{height:'80vh',objectFit:'cover'}}
                className="d-block w-100"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/20f86764666299.5ad98abfed087.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h1 className="text-warning">Diamond Stone</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={{height:'80vh',objectFit:'cover'}}
                className="d-block w-100"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/3fb80484443781.5d5d200a84c91.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h1 className="text-warning">Wedding Rings</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default TopBanner;