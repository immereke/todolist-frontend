import React, {Component} from "react";
import Todolist from "./Todolist";

class ToDo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: '',
            todos: [
                {
                    id: 1,
                    completed: false,
                    title: 'Первая задача'
                },
                {
                    id: 2,
                    completed: false,
                    title: 'Вторая задача'
                },
                {
                    id: 3,
                    completed: false,
                    title: 'Третья задача'
                },
                {
                    id: 4,
                    completed: false,
                    title: 'Четвертая задача'
                }
            ]
        }
    }

    handleInput = (event) => {
        this.setState({input: event.target.value})
    }

    completedTodo = (id) => {
        const index = this.state.todos.map(todo => todo.id).indexOf(id)
        this.setState(prevState => {
            let {todos} = prevState;
            todos[index].completed = true
            return todos
        })
    }

    addTodo = () => {
        const {input} = this.state;
        if (input)
            this.addTodos(input);
        this.setState({input: ''})
    };


    addTodos = (todo) => {
        this.setState(state => {
            const {todos} = state;
            todos.push(
                {
                    title: todo
                }
            );
            return todos
        })
    }

    deleteCompletedTodos = () => {
        let temp_todos = [...this.state.todos]
        let result = temp_todos.filter(todo => !todo.completed)
        this.setState({
            todos: result
        })
        return result
    }

    render() {
        const {input} = this.state;
        const {todos} = this.state;
        const finalTodos = todos.map(
            (todo, index) => {
                return (
                    <Todolist todo={todo}
                              key={index}
                              handleChange={() => this.completedTodo(todo.id)}
                              completedTodo={this.completedTodo}

                    />
                )
            }
        )
        return (
            <div className="Todo">
                <h1>Todolist</h1>
                <p>{finalTodos}</p>
                <input type="text" placeholder="Введите список" onChange={this.handleInput} value={input}/>
                <button onClick={this.addTodo}> Добавить</button>
                <button onClick={this.deleteCompletedTodos}>Удалить выполненные задачи</button>
            </div>
        );
    }

}

export default ToDo