import React from 'react';
import './book.css';

import { ButtonGroup, Button } from 'react-bootstrap';

import Modal from '../../components/modal/Modal';
import FactoryImage from '../../utils/FactoryImage';
import BookApi from '../../utils/api/book';

class Book extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            showModalDelete:false,
            disable:false
        }
        this.factoryImageBook = new FactoryImage(require.context('../../assets/img/books/', false, /\.(png|jpe?g|svg)$/));
    }

    showAndHiddenModalDelete = () => {
        this.setState({showModalDelete:!this.state.showModalDelete});
    }

    deleteBook = () => {
        this.setState({disable:true});
        BookApi.delete(this.props.book.id).then(res => {
            this.showAndHiddenModalDelete();
            this.props.callbackDelete(res);
        }).catch(res => {
            this.props.callbackDelete(res);
        }).finally(() => {
            this.setState({disable:false});
        });
    }

    render(){

        const {book} = this.props;
        const {showModalDelete,disable} = this.state;

        return(
            <div className="book" >
                <img src={this.factoryImageBook.getImage(book.id)} alt="book" />
                <div className="book-description" >
                    <h1 className="book-title" >{book.title}</h1>
                    <p className="book-subtitle" >{book.isbn}</p>
                </div>
                <ButtonGroup size="sm" className="mt-3">
                    <Button variant="outline-primary" >Edit</Button>
                    <Button variant="outline-danger" onClick={() => this.showAndHiddenModalDelete()} >Delete</Button>
                </ButtonGroup>
    
                <Modal  
                    show={showModalDelete} 
                    title="Are you sure?" 
                    actionCancel={this.showAndHiddenModalDelete.bind(this)}
                    actionConfirm={this.deleteBook.bind(this)}
                    disable={disable}>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </Modal>
            </div>
        );
    }
}

export default Book;