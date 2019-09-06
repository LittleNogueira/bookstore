import React from 'react';
import {Form} from 'react-bootstrap';

import Modal from '../../components/modal/Modal';
import AuthorApi from '../../utils/api/author';

export default class FormAuthor extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            author:{
                firstName:'',
                lastName:''
            }
        };
    }

    getTitle = () => {
        if(this.props.author){
            return 'Edit Author';
        }else{
            return 'Create Author';
        }
    }

    componentWillReceiveProps(){
        const author = this.props.author; 
        this.setState({author:{
                id: author.id,
                firstName:author.firstName,
                lastName:author.lastName
            }
        });
    }

    replaceOrCreate = () => {
        AuthorApi.replaceOrCreate(this.state.author).then(res => {
            this.props.actionConfirm(res);
        });
    }

    render(){
        
        const {show,actionCancel} = this.props;
        const {author} = this.state;

        return(
            <Modal actionConfirm={this.replaceOrCreate.bind(this)} actionCancel={actionCancel} show={show} title={this.getTitle()} >
                
                <Form>
                    <Form.Group controlId="firstName">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" value={author.firstName} onChange={(e) => this.setState({author:{...author,firstName:e.target.value}}) } />
                    </Form.Group>

                    <Form.Group controlId="lastName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" value={author.lastName} onChange={(e) => this.setState({author:{...author,lastName:e.target.value}}) } />
                    </Form.Group>

                </Form>
            </Modal>
        );
    }

}