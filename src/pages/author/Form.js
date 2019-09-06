import React from 'react';
import Modal from '../../components/modal/Modal';

export default class Form extends React.Component{



    getTitle = () => {
        if(this.props.author){
            return 'Edit Author';
        }else{
            return 'Create Author';
        }
    }

    render(){
        
        const {show,actionCancel} = this.props;

        return(
            <Modal actionCancel={actionCancel} show={show} title={this.getTitle()} >
                
            </Modal>
        );
    }

}