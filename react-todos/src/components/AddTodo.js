import React from 'react';

class AddTodo extends React.Component {
    
    state = {
        title: ''
    }

    textInputHandler = (e) => this.setState(
        {
            [e.target.name]: e.target.value
        }
    );

    formSubmitHandler = (e) => {
        e.preventDefault();
        this.props.formSubmitHandler(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <form onSubmit={this.formSubmitHandler} style={formStyle}>
                <input 
                    type="text" 
                    name="title"
                    style={{flex: '10', padding: '5px'}} 
                    placeholder="Add it to the list..."
                    value={this.state.title}
                    onChange={this.textInputHandler}
                    required
                />
                <input
                    type="submit"
                    value="Add"
                    className="add-btn"
                />
            </form>
        );
    }
}

const formStyle = {
    display: 'flex', 
    border: '1px solid var(--black)',
    borderTop: 'none'
}

export default AddTodo;