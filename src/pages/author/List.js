import React from 'react';
import Layout from '../../layouts/store/Layout';
import { Row, Col } from 'react-bootstrap';
import Author from '../../components/author/Author';

function List(){

    return(
        <Layout>
            <h1>Authors</h1>
            <Row>
                <Col xs="6" sm="6" md="4" lg="3" xl="2" >
                    <Author/>
                </Col>
                <Col xs="6" sm="6" md="4" lg="3" xl="2" >
                    <Author/>
                </Col>
                <Col xs="6" sm="6" md="4" lg="3" xl="2" >
                    <Author/>
                </Col>
                <Col xs="6" sm="6" md="4" lg="3" xl="2" >
                    <Author/>
                </Col>
                <Col xs="6" sm="6" md="4" lg="3" xl="2" >
                    <Author/>
                </Col>
                <Col xs="6" sm="6" md="4" lg="3" xl="2" >
                    <Author/>
                </Col>
                <Col xs="6" sm="6" md="4" lg="3" xl="2" >
                    <Author/>
                </Col>
                <Col xs="6" sm="6" md="4" lg="3" xl="2" >
                    <Author/>
                </Col>
                <Col xs="6" sm="6" md="4" lg="3" xl="2" >
                    <Author/>
                </Col>
            </Row>
        </Layout>
    );

}

export default List;