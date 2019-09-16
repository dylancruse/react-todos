import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1 style={{paddingBottom: '5px'}}>To-Do List</h1>
            <Link to="/" style={linkStyle}>Home</Link>
            |
            <Link to="/about" style={linkStyle}>About</Link>
        </header>
    );
}

const headerStyle = {
    backgroundColor: 'var(--black)',
    color: 'var(--white)',
    textAlign: 'center',
    fontSize: '.8em',
    padding: '10px',
}

const linkStyle = {
    color: 'var(--white)',
    textDecoration: 'none',
    margin: '10px'
}

export default Header;