/**
 * Created by piotrandrzejewski on 03/11/2016.
 */
import React from 'react'
import {Button} from 'react-bootstrap'
import './buttons.css'
import Heart from '../GlyphIcon_heart/heart'

export default class ButtonsEvent extends React.Component {
    render() {
        return (
            <div>
                <Button bsStyle="primary">Button</Button>
                <Heart/>
            </div>
        )
    }
}