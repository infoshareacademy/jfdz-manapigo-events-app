import React from 'react'
import {Row,FormGroup,FormControl,Button} from 'react-bootstrap'
import FiltersButton from './FiltersButton/FiltersButton'

export default () => (
    <div>
        <Button bsStyle="danger">FLITRUJ Z TEMATEM</Button>
        <FormGroup>
            <FormControl type="text" placeholder="Search" />
        </FormGroup>
        <Row>
            <FiltersButton/>
        </Row>
    </div>

)