<template>
    <div>
        <h1>ToDo List</h1>
        <CreateItem></CreateItem>
        <Items></Items>
    </div>
</template>

<script>
import CreateItem from './CreateItem.vue'
import Items from './Items.vue'


export default {
    name: 'Home',
    components: {
        CreateItem, Items
    }
}
</script>

<style scoped>
h1 {
     margin: 20px 0;
    font-size: 35px;
}
</style>