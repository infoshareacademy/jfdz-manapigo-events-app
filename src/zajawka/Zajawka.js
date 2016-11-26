import React from 'react'

import { Carousel } from 'react-bootstrap';
import dluga from './img/dluga.jpg';

const zdjecia = (props) => (
    <Carousel>
        <Carousel.Item>
            <img width={1200} height={500} alt="Gdansk" src={dluga}/>
        </Carousel.Item>
        <Carousel.Item>
            <img width={1200} height={500} alt="Gdansk" src={dluga}/>
        </Carousel.Item>
        <Carousel.Item>
            <img width={1200} height={500} alt="Gdansk" src={dluga}/>
        </Carousel.Item>
    </Carousel>
);

export default zdjecia;
