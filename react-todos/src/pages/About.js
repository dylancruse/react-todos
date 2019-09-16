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
    padding: '10px',
    textAlign: 'center',
    lineHeight: '1.4'
}

export default About;