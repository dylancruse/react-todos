import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
    getDivStyle = () => {
        return {
            background: 'var(--green)',
            padding: '10px',
            borderBottom: '1px solid var(--white)',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            alignContent: 'center'
        }
    }

    getPStyle = () => {
        return {
            color: 'var(--black)',
            marginLeft: '10px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        }
    }

    render() {
        const {title, id} = this.props.todo;
        return (
            <div style={this.getDivStyle()}>
                <input 
                    type="checkbox" 
                    onChange={this.props.toggleComplete.bind(this, id)} 
                    style={{marginTop: '3px'}} 
                />
                <p style={this.getPStyle()}>{title}</p>
            </div> 
        );
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;