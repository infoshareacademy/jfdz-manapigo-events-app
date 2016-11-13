import React from 'react';

import { Grid, Row, Col } from 'react-bootstrap'

import Menu from './menu/menu'
import O_nas from './o_nas/o_nas'

const App = ({
    children
}) => (
    <Grid>
        <Row>
            <Col>
                <Menu />
            </Col>
        </Row>
        <Row>
            <Col>
                {children}
            </Col>
        </Row>
        <Row>
            <Col>
                <O_nas />
            </Col>
        </Row>
    </Grid>
);

export default App;
