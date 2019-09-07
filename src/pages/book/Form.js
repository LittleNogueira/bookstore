import React from 'react';

import {Form} from 'react-bootstrap';

import Modal from '../../components/modal/Modal';
import BookApi from '../../utils/api/book';
import AuthorApi from '../../utils/api/author';

class FormBook extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            book:{
                title:'',
                isbn:'',
                authorId:''
            },
            disable:false,
            authors:[]
        };
    }

    componentDidMount = () => {
        this.loadAuthors();
    }

    componentWillReceiveProps = () => {
        if(this.props.book){
            const book = this.props.book; 
            this.setState({book:{
                    id: book.id,
                    title:book.title,
                    isbn:book.isbn,
                    authorId:book.authorId
                }
            });
        }

        if(this.props.authorId){
            this.setState({book:{...this.state.book,authorId:this.props.authorId} });
        }
    }

    loadAuthors = () => {
        AuthorApi.getAll().then(res => {
            this.setState({authors:res.data});
        })
    }

    getTitle = () => {
        return this.props.book ? 'Edit Book' : 'Create Book';
    }

    replaceOrCreate = () => {
        this.setState({disable:true});
        BookApi.replaceOrCreate(this.state.book).then(res => {
            this.props.actionConfirm(res);
        }).catch(res => {
            this.props.actionConfirm(res);
        }).finally(() => {
            this.setState({disable:false});
        });
    }

    getOptionsAuthors = () => {
        return this.state.authors.map(author => {
            return (<option key={author.id} value={author.id} >{`${author.firstName} ${author.lastName}`}</option>);
        });
    }

    render() {

        const {show,actionCancel} = this.props;
        const {book} = this.state;

        return(
            <Modal actionConfirm={this.replaceOrCreate} actionCancel={actionCancel} show={show} title={this.getTitle()}>
                <Form>
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control value={book.title} onChange={(e) => this.setState({book:{...book,title:e.target.value}}) } type="text"/>
                    </Form.Group>

                    <Form.Group controlId="isbn">
                        <Form.Label>ISBN</Form.Label>
                        <Form.Control value={book.isbn} onChange={(e) => this.setState({book:{...book,isbn:e.target.value}}) } type="text"/>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Author</Form.Label>
                        <Form.Control onChange={(e) => this.setState({book:{...book,authorId:e.target.value}}) } value={book.authorId} as="select">
                            <option value={null} >Unknown</option>
                            {this.getOptionsAuthors()}
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal>
        );
    }
}

export default FormBook;