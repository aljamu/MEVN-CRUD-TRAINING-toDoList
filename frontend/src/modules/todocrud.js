import { ref, computed } from 'vue';
import { useRoute, useRouter } from "vue-router"

const getTodos = () => {
    const route = useRoute()
    const router = useRouter()

    const todoId = computed(() => route.params.id)
    console.log(todoId)
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
        .then(() => {
            getAllTodos()
        })
    }

    const deleteTodo = (_id) => {
        fetch('http://localhost:3000/todos/delete/' + _id, { method: "DELETE"})
        .then(() => {
            getAllTodos()
        })
    }

    const editTodo = () => {
        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
                //"auth-token": state.token
            },
            body: JSON.stringify({
                todo: state.value.newTodoItem,
                author: state.value.newAuthor
            })
        }
        fetch('http://localhost:3000/todos/update/' + todoId.value, 
        requestOptions)
        .then(res => res.body)
        .then(res => {console.log(res)})
        router.push("/todos") //Once done, you will be redirected to Url/todos
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

    const todo = ref({})
    const GetSpecificTodo = async () => {
        try {
            fetch('http://localhost:3000/todos')
            .then(res => res.json())
            .then(data => {
                todo.value = data.filter(t => t._id === todoId.value)
            })
        }
        catch(err) {console.log(err)}
    }


    return { 
        state,
        getAllTodos,
        newTodo,
        deleteTodo,
        editTodo,
        todo,
        GetSpecificTodo,
        todoId
    }
}

export default getTodos