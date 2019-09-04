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
                    <Link to="/dashboard" ><li>Dashboard</li></Link>
                    <Link to="/form" ><li>Forms</li></Link>
                    <Link to="/dashboard" ><li>Dashboard</li></Link>
                    <Link to="/form" ><li>Forms</li></Link>
                    <Link to="/dashboard" ><li>Dashboard</li></Link>
                    <Link to="/form" ><li>Forms</li></Link>
                    <Link to="/dashboard" ><li>Dashboard</li></Link>
                    <Link to="/form" ><li>Forms</li></Link>
                    <Link to="/dashboard" ><li>Dashboard</li></Link>
                    <Link to="/form" ><li>Forms</li></Link>
                    <Link to="/dashboard" ><li>Dashboard</li></Link>
                    <Link to="/form" ><li>Forms</li></Link>
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