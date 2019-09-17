import React from 'react';

function About() {
    return (
        <div style={aboutDivStyle}>
            <h2>About</h2>
            <p> A simple to-do app built using the React framework. <br/>
                Author: Dylan Cruse
            </p>
        </div>
    );
}

const aboutDivStyle = {
    backgroundColor: 'var(--dark-blue)',
    color: 'var(--white)',
    textAlign: 'center',
    lineHeight: '1.4',
    padding: '10px',
    border: '1px solid var(--black)'
}

export default About;