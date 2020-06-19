const initialState = {
    todos: [{
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
        }]
}

export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case 'DELETE':
            return {
                todos: state.todos.filter(todo=>!todo.completed)
            }


        default:
            return state
    }

}