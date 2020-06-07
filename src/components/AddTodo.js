import React from 'react'

class AddTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            input: ''
        }
    }
    addTodo =() => {
        const {input} = this.state;
        if (input)
            this.props.addTodo(input);
            this.setState({input: ''})
    };

    handleChange = event => {
        this.setState({input: event.target.value})
    };

    render() {
        const {input} =this.state;
        return(
            <div>
                <input  onChange={this.handleChange} value={input}/>
                <button onClick={this.addTodo}> Добавить </button>
            </div>
        )
    }
}

export default AddTodo