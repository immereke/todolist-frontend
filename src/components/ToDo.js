import React from 'react'
import Todolist from "./Todolist";

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            todos: [
                {
                    id: 1,
                    completed: true,
                    title: 'Первая задача'
                },
                {
                    id: 2,
                    completed: true,
                    title: 'Вторая задача'
                },
                {
                    id: 3,
                    completed: true,
                    title: 'Третья задача'
                }
            ]
        }
    }

    completedTodo = (id) => {
        const index = this.state.todos.map(todo => todo.id).indexOf(id);
        this.setState(state => {
            let {todos} = state;
            todos[index].completed = true
            return todos;
        })
    };

    deleteTodo = (id) => {
        const index = this.state.todos.map(todo => todo.id).indexOf(id);
        this.setState(state => {
                let {todos} = state;
                delete todos[index];
                return todos;
            }
        )
    };


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


    handleChange = event => {
        this.setState({input: event.target.value})
    };

    render() {

        const {todos} = this.state;
        const {input} = this.state;
        return (
            <div>
                <h1>TodoList</h1>
                {todos.map((todo, index) => (
                        <Todolist todo={todo}
                                  key={index}
                                  completedTodo={() => this.completedTodo(todo.id)}
                                  deleteTodo={() => this.deleteTodo(todo.id)}
                        />
                    )
                )}
                <input onChange={this.handleChange} value={input}/>
                <button onClick={this.addTodo}> Добавить</button>
            </div>
        )
    }
}

export default ToDo