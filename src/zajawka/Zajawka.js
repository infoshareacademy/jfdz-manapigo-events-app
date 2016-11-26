import React from 'react'

import { Carousel } from 'react-bootstrap';
import './zajawka.css';
import dluga from './img/dluga.jpg';
import glowny from './img/glowny.jpg';
import karuzela from './img/karuzela.jpg';

const zdjecia = (props) => (
    <Carousel>
        <Carousel.Item>
            <img alt="Gdansk" src={glowny}/>
        </Carousel.Item>
        <Carousel.Item>
            <img alt="Gdansk" src={dluga}/>
        </Carousel.Item>
        <Carousel.Item>
            <img alt="Gdansk" src={karuzela}/>
        </Carousel.Item>
    </Carousel>
);

export default zdjecia;
