import React, {Component} from "react";
import Todolist from "./Todolist";
import {connect} from "react-redux";

class ToDo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: '',
        }
    }


    handleInput = (event) => {
        this.setState({input: event.target.value})
    }

    completedTodo = (id) => {
        const index = this.props.todos.map(todo => todo.id).indexOf(id)
        this.setState(prevState => {
            let {todos} = prevState;
            this.props.todos[index].completed = true
            return todos
        })
    }


    // addTodo = () => {
    //     const {input} = this.state;
    //     if (input)
    //         this.addTodos(input);
    //     this.setState({input: ''})
    // };
    //
    //
    // addTodos = (todo) => {
    //     this.setState(state => {
    //         const {todos} = state;
    //         this.props.todos.push(
    //             {
    //                 title: todo
    //             }
    //         );
    //         return todos
    //     })
    // }


    render() {
        console.log('APP', this.props)
        const finalTodos = this.props.todos.map(
            (todo, index) => {
                return (
                    <Todolist todo={todo}
                              key={index}
                              handleChange={() => this.completedTodo(todo.id)}

                    />
                )
            }
        )
        return (
            <div className="Todo">
                <h1>Todolist</h1>
                {finalTodos}
                <input type="text" placeholder="Введите список" onChange={this.handleInput} value={this.state.input}/>
                <button type='submit' onClick={this.addTodo}> Добавить</button>
                <button onClick={this.props.deleteCompletedTodos}>Удалить выполненные задачи</button>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return{
        deleteCompletedTodos: ()=>dispatch({type: 'DELETE'})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ToDo)