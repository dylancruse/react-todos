import React from 'react';
import Header from './layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';
import uuid from 'uuid';

class App extends React.Component {
    state = {
        todos: [
            {
                id: uuid.v4(),
                title: 'Build todo app',
                completed: false
            },
            {
                id: uuid.v4(),
                title: 'Upload it to portfolio',
                completed: false
            },
            {
                id: uuid.v4(),
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

    //Create new todo
    formSubmitHandler = (title) => {
        const newTodo = {
            id: uuid.v4(),
            title,
            completed: false 
        }

        this.setState(
            {
                todos: [...this.state.todos, newTodo]
            }
        );
    }

    render() {
        return (
            <div id="App-wrapper">
                <div className="App">
                    <Header />
                    <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} 
                    deleteTodo={this.deleteTodo} />
                    <AddTodo formSubmitHandler={this.formSubmitHandler}/>
                </div>
            </div>
        );
    }
}

export default App;