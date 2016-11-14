import React from 'react';

import { Grid, Row, Col, Image } from 'react-bootstrap';
import PiotrekUrl from './img/herb.png';
import GrzegorzUrl from './img/grzegorz.jpg';
import MarekUrl from './img/marek.jpg';

const authorsPhotos = (props) => (
    <Grid>
        <Row>
            <Col xs={12} md={4} lg={3}>
                <Image src={PiotrekUrl} rounded />
            </Col>
            <Col xs={12} md={4} lg={3}>
                <Image src={GrzegorzUrl} rounded />
            </Col>
            <Col xs={12} md={4} lg={3}>
                <Image src={MarekUrl} rounded />
            </Col>
        </Row>
    </Grid>
);

export default authorsPhotos;

//ReactDOM.render(photoAuthors, mountNode);



/*
var React = require('react');
//var ReactDOM = require('react-dom');

import piotrekSrc from './img/piotrek.gif'
import grzegorzSrc from './img/grzegorz1.png'
import marekSrc from './img/marek1.png'

var Piotrek = {
    title: "...has not delivered the description of himself",
    src: piotrekSrc
};

var Grzegorz = {
    title: "Computer graphics, desktop publishing and websites design are what he feels most comfortable with",
    src: grzegorzSrc
};

var Marek = {
    title: "The one who loves to spend his time in an active way, extremely keen on new technologies.",
    src: marekSrc
};

var Persons = React.createClass({
    render: function() {
        return (
            <div>
                <p>{Piotrek.title}</p>
                <img src = {Piotrek.src}/>

                <p>{Grzegorz.title}</p>
                <img src = {Grzegorz.src}/>

                <p>{Marek.title}</p>
            <img src = {Marek.src}/>
            </div>
        );
    }
});

export default Persons;

*/