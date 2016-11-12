/**
 * Created by piotrandrzejewski on 07/11/2016.
 */
import React from "react"
import {Button,ButtonToolbar} from 'react-bootstrap'

export default ({activeFilter})=> (
    <ButtonToolbar>
        <Button onClick = {() => activeFilter('praca')} bsStyle="success">Praca</Button>
        <Button onClick = {() => activeFilter('sport')} bsStyle="info">sport</Button>
        <Button onClick = {() => activeFilter('rozrywka')} bsStyle="warning">Kulinarne frykasy</Button>
        <Button onClick = {() => activeFilter('niunie')} bsStyle="danger">niunie</Button>
        <Button onClick = {() => activeFilter('all')} bsStyle="danger">usun filtry</Button>
    </ButtonToolbar>
)
