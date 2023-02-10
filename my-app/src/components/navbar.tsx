import React, {Component, useState} from 'react';

//stateless functional componenet

interface navBarProps {
    totalCounters: number;
}

const NavBar = ({totalCounters}: navBarProps) => {
    return(
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar 
                <span className="badge.badge-pill.badge-secondary">
                    {totalCounters}
                </span>
            </a>
        </nav>
    )    
};

export default NavBar;

