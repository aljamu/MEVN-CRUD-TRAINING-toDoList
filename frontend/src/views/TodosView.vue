<template >
    <div>
        <h1>All Todos</h1>
        <hr>
        <input type="text" placeholder="Author" v-model="state.newAuthor">
        <br />
        <input type="text" placeholder="New Todo" v-model="state.newTodoItem">
        <br />
        <button @click="newTodo()">Add Todo</button>
        <span>Debug & Test: {{ state.newAuthor }} </span>
        <hr>
        <div class="card-item" v-for="item in state.todos" :key="item.author">
            <h2>
                {{ item.author }}
            </h2>
            <p>
                {{ item.todo }}
            </p>
            <button @click="deleteTodo(item._id)">Delete</button>
            <button @click="editTodo(item._id)">Edit</button>
        </div>
    </div>
</template>
<script>
import { onMounted } from 'vue';
import todocrud from '../modules/todocrud'

export default {
    setup() {
/*        const state = reactive({
            todos: {}
        })

        function getAll() {
            fetch('http://localhost:3000/todos')
            .then(res => res.json())
            .then(data => {
                state.todos = data
                //debugger
            })
        }*/ //"Outsourced" into composable modules/todocrud.js

        const { state, getAllTodos, newTodo, deleteTodo, editTodo } = todocrud()

        onMounted(()=>{
            getAllTodos()
        })
        return { state, getAllTodos, newTodo, deleteTodo, editTodo }
    }
}
</script>
<style scoped>
    .card-item{
        border: 2px solid darkolivegreen;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 5px; 
        background-color: #42b983;
        color: white;
    }
</style>