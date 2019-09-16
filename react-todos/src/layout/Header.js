import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>To-Do List</h1>
        </header>
    );
}

const headerStyle = {
    backgroundColor: 'var(--black)',
    color: 'var(--white)',
    textAlign: 'center',
    fontSize: '.8em',
    padding: '10px'
}

export default Header;