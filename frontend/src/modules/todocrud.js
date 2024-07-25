import { ref } from 'vue';

const getTodos = () => {
    const state = ref({
        todos: {}
    })

    const getAllTodos = async () => {
        try {
            await fetch('http://localhost:3000/todos')
            .then(res => res.json())
            .then(data => {
                state.todos = data
                //debugger
            })
        }
        catch {

        }
    }
}