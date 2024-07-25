<template >
    <div>
        <h1>{{test.name}}</h1>
    </div>
</template>
<script>
import { reactive } from 'vue';

export default {
    setup() {
        const test = reactive({
            name:"Sideshow Bob"
        })

        return { test }
    }
}
</script>
<style scoped>
    
</style>