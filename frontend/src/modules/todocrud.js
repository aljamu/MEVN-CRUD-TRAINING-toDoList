import { ref } from 'vue';

const getTodos = () => {
    const state = ref({
        todos: {}
    })

    const newTodo = () => {
        fetch('http://localhost:3000/todos/new', { method: "POST"})
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