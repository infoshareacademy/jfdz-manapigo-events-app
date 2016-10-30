/**
 * Created by Marek on 28.10.2016.
 */
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

var persons = React.createClass({
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

ReactDOM.render(
    <persons />,
    document.getElementsByClassName('app')
);