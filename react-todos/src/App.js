import React from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Todos />
            </div>
        );
    }
}

export default App;