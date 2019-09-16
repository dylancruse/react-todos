import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
    getDivStyle = () => {
        return {
            background: 'var(--dark-blue)',
            padding: '10px',
            borderColor: 'var(--black)',
            borderStyle: 'solid',
            borderWidth: '0px 1px 1px 1px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            alignContent: 'center'
        }
    }

    getPStyle = () => {
        return {
            color: 'var(--white)',
            marginLeft: '10px',
            marginTop: '3px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        }
    }

    getButtonStyle = () => {
        return {
            background: 'var(--black)',
            color: 'var(--white)',
            border: '1px solid var(--black)',
            padding: '5px',
            borderRadius: '10%',
            marginLeft: 'auto',
            fontSize: '.8em',
            cursor: 'pointer'
        }
    }

    render() {
        const {title, id} = this.props.todo;
        return (
            <div style={this.getDivStyle()}>
                <input 
                    type="checkbox" 
                    onChange={this.props.toggleComplete.bind(this, id)} 
                    style={{marginTop: '5px'}} 
                />
                <p style={this.getPStyle()}>{title}</p>
                <button onClick={this.props.deleteTodo.bind(this, id)} 
                    style={this.getButtonStyle()}>
                        Delete
                </button>
            </div> 
        );
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;