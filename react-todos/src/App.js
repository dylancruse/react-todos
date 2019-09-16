import React from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'Build todo app',
                completed: false
            },
            {
                id: 2,
                title: 'Upload it to portfolio',
                completed: false
            },
            {
                id: 3,
                title: 'Get a job',
                completed: false
            }
        ]
    }

    toggleComplete = (id) => {
        this.setState(
            {
                todos: this.state.todos.map(
                    (todo) => {
                        if(todo.id === id) {
                            todo.completed = !todo.completed
                        }
                        return todo;
                    }
                )
            }
        );
    }

    deleteTodo = (id) => {
        this.setState(
            {
                todos: [...this.state.todos.filter(
                    todo => todo.id !== id
                    )
                ]
            }
        )
    }

    render() {
        return (
            <div id="App-wrapper">
                <div className="App">
                    <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} 
                    deleteTodo={this.deleteTodo} />
                </div>
            </div>
        );
    }
}

export default App;