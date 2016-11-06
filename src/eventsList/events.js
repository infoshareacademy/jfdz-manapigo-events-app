import React from 'react'
import {Grid,Col,Row,Thumbnail} from 'react-bootstrap'
import { connect } from 'react-redux'

import  ButtonsEvent  from './Buttons/buttons'

const mapStateToProps = (state) => ({
    events: state.eventsData.events,
    isLoading: state.eventsData.isLoading
})

const events = ({events,isLoading}) =>(
            <Grid>
                <Row>
                    {events.map(event =>
                    <Col xs={12} md={4} lg={3}>
                        <Thumbnail src={event.img} >
                            <h3>{event.type}</h3>
                            <p>{event.date}</p>
                            <ButtonsEvent/>
                        </Thumbnail>
                    </Col>)}
                </Row>
            </Grid>
        );


 export default connect(mapStateToProps)(events)