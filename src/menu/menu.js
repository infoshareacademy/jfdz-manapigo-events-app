/**
 * Created by piotrandrzejewski on 06/11/2016.
 */
import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { IndexLink } from 'react-router'
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'
import Login from '../login/login'


export default (props) => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <IndexLink to="/">Home</IndexLink>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <LinkContainer to="/events">
                <NavItem eventKey={1} href="/events">Events</NavItem>
            </LinkContainer>
        </Nav>
        <Login/>
    </Navbar>
)