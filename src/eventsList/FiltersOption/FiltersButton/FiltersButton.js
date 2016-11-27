/**
 * Created by piotrandrzejewski on 07/11/2016.
 */
import React from "react"
import {Button,ButtonToolbar,Collapse} from 'react-bootstrap'



export default ({activeFilter,resetFilter}) => (

    <div>
        <ButtonToolbar>
              <Button onClick= { () => activeFilter('nauka')} bsStyle='default'>Nauka</Button>
              <Button onClick= { () => activeFilter('muzyka')} bsStyle="default">Muzyka</Button>
              <Button onClick= { () => activeFilter('rozrywka')} bsStyle="default">Rozrywka</Button>
              <Button onClick= { () => resetFilter()} bsStyle="default">usun filtry</Button>
        </ButtonToolbar>


    </div>
)

