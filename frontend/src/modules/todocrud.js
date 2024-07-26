import { ref } from 'vue';

const getTodos = () => {
    const state = ref({
        newAuthor: '',
        newTodoItem: '',
        todos: {}
    })

    const newTodo = () => {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
                //"auth-token": state.token
            },
            body: JSON.stringify({
                todo: state.value.newTodoItem,
                author: state.value.newAuthor
            })
        }
        fetch('http://localhost:3000/todos/new', requestOptions)
    }

    const deleteTodo = (_id) => {
        fetch('http://localhost:3000/todos/delete/' + _id, { method: "DELETE"}
            //.then(() => { location.reload() })
        )
    }

    const editTodo = (_id) => {
        const requestOptions = {
            method: "PUT"
        }
        fetch('http://localhost:3000/todos/update/' + _id, requestOptions)
        .then(res => res.body)
        .then(res => {console.log(res)})
    }

    const getAllTodos = async () => {
        try {
            await fetch('http://localhost:3000/todos')
            .then(res => res.json())
            .then(data => {
                state.value.todos = data
                //debugger
            })
        }
        catch(error) {
            console.log(error)
        }
    }

    return { 
        state,
        getAllTodos,
        newTodo,
        deleteTodo,
        editTodo
    }
}

export default getTodos