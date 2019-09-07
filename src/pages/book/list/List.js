import React from 'react';

import { Row, Col, Button } from 'react-bootstrap';
import { Notyf } from 'notyf';

import BookApi from '../../../utils/api/book';
import FormBook from '../form/Form';
import Layout from '../../../layouts/store/Layout';
import Book from '../../../components/book/Book';


class List extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false
    }
    this.notyf = new Notyf();
  }

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    BookApi.getAll().then(res => {
      this.setState({ books: res.data });
    });
  }

  listBooks = () => {
    return this.state.books.map(book => {
      return (
        <Col key={book.id} xs="6" sm="6" md="4" lg="3" xl="2" >
          <Book callbackConfirm={this.callbackEditBook.bind(this)} callbackDelete={this.callbackDeleteBook.bind(this)} book={book} />
        </Col>
      );
    });
  }

  showAndHiddenModal = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  callBackCreateBook = (res) => {
    if (res.status === 200) {
      this.loadBooks();
      this.showAndHiddenModal();
      this.notyf.success('Book successfully created.');
    } else {
      this.notyf.error('Unexpected error.');
    }
  }

  callbackDeleteBook = (res) => {
    if (res.status === 200) {
      this.loadBooks();
      this.notyf.success('Book successfully deleted.');
    } else {
      this.notyf.success('Unexpected error.');
    }
  }

  callbackEditBook = (res) => {
    if (res.status === 200) {
      this.loadBooks();
      this.notyf.success('Book successfully edited.');
    } else {
      this.notyf.error('Unexpected error.');
    }
  }

  render() {

    const { showModal } = this.state;

    return (
      <Layout>
        <div className="top-list" >
          <h1>Books</h1>
          <Button variant="outline-primary" onClick={() => this.showAndHiddenModal()} >Create +</Button>
        </div>
        <Row>
          {this.listBooks()}
        </Row>
        <FormBook actionConfirm={this.callBackCreateBook.bind(this)} actionCancel={this.showAndHiddenModal.bind(this)} show={showModal} />
      </Layout>
    );
  }
}

export default List;