import React from 'react'
import {Grid,Col,Row,Thumbnail} from 'react-bootstrap'
import { connect } from 'react-redux'

import  {activeFilter}  from './actionCreator'
import  ButtonsEvent  from './Buttons/buttons'
import  FiltersOptions from './FiltersOption/FiltersOptions'
import filters from './filters'


const mapStateToProps = (state) => ({
    events: state.eventsData.events,
    isLoading: state.eventsData.isLoading,
    activeFilterName: state.eventsData.activeFilterName,
})

const mapDispatchToProps = (dispatch) =>({
    activeFilter: (filterName) => dispatch(activeFilter(filterName))
})

const events = (
    {
        events,
        isLoading,
        activeFilter,
        activeFilterName
    }) =>(
            <Grid>
                <FiltersOptions activeFilter={activeFilter}/>
                <Row>
                    {isLoading ? 'Loading events...' : null}
                    {events.filter(event => filters[activeFilterName]).map(event =>
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


 export default connect(mapStateToProps,mapDispatchToProps)(events)