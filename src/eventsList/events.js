import React from 'react'
import {Grid,Col,Row,Thumbnail} from 'react-bootstrap'
//import { connect } from 'react-redux'

import  ButtonsEvent  from './Buttons/buttons'


export default class events extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12} md={4} lg={3}>
                        <Thumbnail src="/images/focia.jpg" >
                            <h3>Thumbnail label</h3>
                            <p>Description enjjncc ndndndnd xnxnn s ddmdmd c dcm dmc</p>
                            <ButtonsEvent/>
                        </Thumbnail>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

