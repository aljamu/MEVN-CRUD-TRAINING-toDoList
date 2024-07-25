<template >
    <div>
        <div class="card-item" v-for="item in state.todos" :key="item.author">
            <h2>
                {{ item.author }}
            </h2>
            <p>
                {{ item.todo}}
            </p>
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

        const { state, getAllTodos } = todocrud()

        onMounted(()=>{
            getAllTodos()
        })
        return { state, getAllTodos }
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