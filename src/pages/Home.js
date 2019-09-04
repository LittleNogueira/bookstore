import React from 'react';
import Layout from '../layouts/store/Layout';
import Book from '../components/book/Book';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import BookService from '../utils/services/book';

class Home extends React.Component {

  componentDidMount(){
    this.props.getAllBook();
  }

  listBooks = () => {
    return this.props.books.map(book => {
      return (
        <Col key={book.id} xs="6" sm="6" md="4" lg="3" xl="2" >
          <Book
            title={book.title}
            subtitle={book.isbn}
            image={book.image} />
        </Col>
      );
    });
  }

  render() {
    return (
      <Layout>
        <h1>Books</h1>
        <Row>
          {this.listBooks()}
        </Row>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return { books: state.books }
};

const mapDispatchToProps = dispatch => {
  return {
    getAllBook: () => {
      dispatch(BookService.getAllBooks());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);