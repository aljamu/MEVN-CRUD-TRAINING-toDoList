<template>
    <div class="home">
      <h1>
        Editing a todo
      </h1>

    <hr>
    <div v-for="items in todo" :key="items._id">
      <h3>Author: {{ items.author }}</h3>
      <p>Todo: {{ items.todo }}</p>
    </div>

    <input type="text" placeholder="Change Author" v-model="state.newAuthor">
        <br />
        <input type="text" placeholder="Change New Todo" v-model="state.newTodoItem">
        <br />
        <button @click="editTodo($route.params.id)">Update item</button>
     <!-- <span>{{ $route.params.id }}</span> -->
    </div>
  </template>
  
  <script>  
  
  import todocrud from "../modules/todocrud"

  export default {
    setup() {
      const { editTodo, state, GetSpecificTodo, todo, todoId } = todocrud()

      GetSpecificTodo();
      return {
        editTodo,
        state, 
        GetSpecificTodo, 
        todo,
        todoId
      }
    }
  }
  </script>