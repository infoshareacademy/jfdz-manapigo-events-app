/**
 * Created by piotrandrzejewski on 07/11/2016.
 */
import React from "react"
import {Button,ButtonToolbar} from 'react-bootstrap'

export default ({activeFilter,resetFilter})=> (
    <ButtonToolbar>
        <Button onClick = {() => activeFilter('praca')} bsStyle='default'>Praca</Button>
        <Button onClick = {() => activeFilter('sport')} bsStyle="default">sport</Button>
        <Button onClick = {() => activeFilter('rozrywka')} bsStyle="default">Kulinarne frykasy</Button>
        <Button onClick = {() => activeFilter('niunie')} bsStyle="default">niunie</Button>
        <Button onClick = {() => resetFilter()} bsStyle="default">usun filtry</Button>
    </ButtonToolbar>
)
