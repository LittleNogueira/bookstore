import React from 'react';
import Layout from '../../layouts/store/Layout';
import { Row, Col } from 'react-bootstrap';
import Author from '../../components/author/Author';
import { connect } from 'react-redux';
import AuthorService from '../../utils/services/author';

class List extends React.Component{

    componentDidMount(){
        this.props.getAllAuthors();
    }

    listAuthors(){
        return this.props.authors.map(author => {
            return (
                <Col key={author.id} xs="12" sm="12" md="6" lg="4" xl="3" >
                    <Author link={`/authors/${author.id}`} image={author.image} name={`${author.firstName} ${author.lastName}`} />
                </Col>
            ); 
        });
    }

    render(){
        return (
            <Layout>
                <h1>Authors</h1>
                <Row>
                    {this.listAuthors()}
                </Row>
            </Layout>
        );
    }

}

const mapStateToProps = (state) => {
    return { authors: state.authors }
};

const mapDispatchToProps = dispatch => {
    return {
        getAllAuthors: () => {
            dispatch(AuthorService.getAllAuthors());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);