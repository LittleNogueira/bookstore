import React from 'react';
import Layout from '../layouts/store/Layout';
import Book from '../components/book/Book';
import { Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <Layout>
      <h1>Handpicked</h1>
      <Row>
        <Col xs="6" sm="6" md="4" lg="3" xl="2" >
          <Book 
            title="Killing the Rising S" 
            subtitle="Craig Alanson"/>
        </Col>
        <Col xs="6" sm="6" md="4" lg="3" xl="2" >
          <Book 
            title="Aftermath" 
            subtitle="Sandra Boyton"/>
        </Col>
        <Col xs="6" sm="6" md="4" lg="3" xl="2" >
          <Book 
            title="Safe Havens Bundle" 
            subtitle="Craig Alanson"/>
        </Col>
        <Col xs="6" sm="6" md="4" lg="3" xl="2" >
          <Book 
            title="Killing the Rising S" 
            subtitle="Craig Alanson"/>
        </Col>
        <Col xs="6" sm="6" md="4" lg="3" xl="2" >
          <Book 
            title="Killing the Rising S" 
            subtitle="Craig Alanson"/>
        </Col>
        <Col xs="6" sm="6" md="4" lg="3" xl="2" >
          <Book 
            title="Killing the Rising S" 
            subtitle="Craig Alanson"/>
        </Col>
        <Col xs="6" sm="6" md="4" lg="3" xl="2" >
          <Book 
            title="Killing the Rising S" 
            subtitle="Craig Alanson"/>
        </Col>
      </Row>
    </Layout>
  );
}

export default Home;
