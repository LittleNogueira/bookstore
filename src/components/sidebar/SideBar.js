import React from 'react';
import './side-bar.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

function SideBar(props){
    return (
        <div className={`side-navbar ${props.sidebar ? 'show' : ''}`} >
            <div className="logo-navbar" >
                <h1>Bookstore</h1>
            </div>
            <div className="content-navbar" >
                <h1>Options</h1>
                <ul className="overflow-navbar" >
                    <Link to="/" ><li>Books</li></Link>
                    <Link to="/authors" ><li>Authors</li></Link>
                </ul>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { sidebar: state.sidebar }
}
const SidebarContainer = connect(mapStateToProps, null)(SideBar);

export default SidebarContainer;