import React, {Component} from 'react';
import Todolist from "./components/Todolist";
import AddTodo from "./components/AddTodo";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [
                {id:1, completed:false, title:'Первая задача'},
                {id:2, completed:false, title:'Вторая задача'}
            ]
        }
    }

    deleteTodo = (id) => {
        const index=this.state.todos.map(todo=>todo.id).indexOf(id);
        this.setState(state=> {
            let {todos} = state;
            delete todos[index];
            return todos;
            }
        )
    }

    addTodo = todo =>{
        this.setState(state=> {
            let {todos} =state;
            todos.push(
                {
                    title: todo
                }
            )
            return todos
        })
    }


    render() {
        const { todos } = this.state;


        return(
            <div>
            <h1>TodoList</h1>
                {todos.map(todo=>(
                        <Todolist todo={todo}
                                  key={todo.id}
                                  deleteTodo={()=>this.deleteTodo(todo.id)}
                        />
                    )
                )}
                <AddTodo addTodo = {this.addTodo}> </AddTodo>
            </div>
        )
    }
}

export default App;
