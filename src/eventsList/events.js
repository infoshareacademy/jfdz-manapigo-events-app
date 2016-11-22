import React from 'react'
import {Grid,Col,Row,Thumbnail} from 'react-bootstrap'
import { connect } from 'react-redux'

import  {activeFilter,resetFilters}  from './actionCreator'
import  ButtonsEvent  from './Buttons/buttons'
import  FiltersButton from './FiltersOption/FiltersButton/FiltersButton'



const mapStateToProps = (state) => ({
    events: state.eventsData.events,
    isLoading: state.eventsData.isLoading,
    activeFilterName: state.eventsData.activeFilterName,
})


const mapDispatchToProps = (dispatch) =>({
    activeFilter : (filterName) => dispatch(activeFilter(filterName)),
    resetFilter : () => dispatch(resetFilters()),

})


const events = (
    {
        events,
        isLoading,
        activeFilter,
        activeFilterName,
        resetFilter,

    }) =>(
            <Grid>
                <FiltersButton activeFilter={activeFilter} resetFilter={resetFilter}  />
                <Row>
                    {isLoading ? 'Loading events...' : null}
                    {events
                        .filter(
                            event => activeFilterName.length > 0 ? activeFilterName
                                .indexOf(event.type) !== -1 : true
                        )
                        .map(event =>
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