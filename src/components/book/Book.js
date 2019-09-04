import React from 'react';
import './book.css';
import book from '../../assets/img/book1.png';

export default function Book(props){

    return(
        <div className="book" >
            <img src={book} alt="book" />
            <div className="book-description" >
                <h1 className="book-title" >Killing the Rising S</h1>
                <p className="book-subtitle" >Craig Alanson</p>
            </div>
        </div>
    );
}