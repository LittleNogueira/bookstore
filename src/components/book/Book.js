import React from 'react';
import './book.css';

export default function Book(props){

    const importAll = (r) => {
        return r.keys().map(r);
    }

    const images = importAll(require.context('../../assets/img/books/', false, /\.(png|jpe?g|svg)$/));

    const getImage = () => {
        const random = Math.floor((Math.random() * (images.length) ) + 0);
        return props.image ? props.image : images[random];
    } 

    getImage();

    return(
        <div className="book" >
            <img src={getImage()} alt="book" />
            <div className="book-description" >
                <h1 className="book-title" >{props.title}</h1>
                <p className="book-subtitle" >{props.subtitle}</p>
            </div>
        </div>
    );
}