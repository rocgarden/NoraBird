import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1  from '../assets/venue1.jpg';
import image2 from '../assets/venue_2.jpg';
import image3 from '../assets/venue_3.jpg';
import place from '../static/EventVenue';


class CarouselComponent  extends Component  {
    constructor() {
        super()
    }

    render ()
    {
        return (
            <div >
            <Carousel  showThumbs={false} autoPlay infiniteLoop>
            <div>
                <img src={image1}/>
                <p className="legend"> {place[0].title}</p>
            </div>
            <div>
                <img src={image2} />
                <p className="legend"> {place[1].title}</p>
            </div>
            <div>
                <img src={image3} />
                <p className="legend"> {place[2].title}</p>
            </div>
        </Carousel>
            </div>
               
        );
    }

    
};

export default CarouselComponent;