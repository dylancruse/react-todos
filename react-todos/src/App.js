import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './pages/About';
import './App.css';

import uuid from 'uuid';
import axios from 'axios';

class App extends React.Component {
    state = {
        todos: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users/1/todos?_limit=5')
            .then(res => this.setState(
                    {       
                        todos: res.data
                    }
                )
            )
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
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => this.setState(
                {
                    todos: [...this.state.todos.filter(
                        todo => todo.id !== id
                        )
                    ]
                }
            ))
    }

    //Create new todo
    formSubmitHandler = (title) => {
        axios.post('https://jsonplaceholder.typicode.com/todos', {
                key: uuid.v4(),
                title,
                completed: false
            }
        )
        .then(res => {
                const newTodo = {
                    id: uuid.v4(),
                    title: res.data.title,
                    completed: res.data.completed
                }
                this.setState(
                    {
                        todos: [...this.state.todos, newTodo]
                    }
                )
            }
        )
    }

    render() {
        return (
            <Router>
                <div id="App-wrapper">
                        <div className="App">
                            <Header />

                            <Route exact path="/" render={props => (
                                <React.Fragment>
                                    <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} 
                                    deleteTodo={this.deleteTodo} />
                                    <AddTodo formSubmitHandler={this.formSubmitHandler}/>
                                </React.Fragment>
                            )}>
                            </Route>

                            <Route path="/about" component={About}></Route>
                        </div>
                </div>
            </Router>
        );
    }
}

export default App;