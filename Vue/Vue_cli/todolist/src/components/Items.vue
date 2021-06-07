<template>
  <div>
      <div class="item" v-for="(item,index) in items" :key="index">
          <input type="checkbox"
            :checked="true ? item.done : item.done == false"
            @change="markDone(index)"
          >
          <span :class="{done:item.done}">{{item.name}}</span>
          <div class="action">
            <button class="btn-edit" @click="editItem(item)" >
                <i class="fas fa-edit"></i>
            </button>
            <button class="btn-remove" @click="removeItem(index)"> 
                <i class="fas fa-minus"></i>
            </button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Items',
    data() {
        return  {
           
        }
    },
    computed: {
        items() {
            return this.$store.state.items
        }
    },
    methods : {
        markDone(index) {
            this.$store.commit("MARK_DONE",index)
        },
        removeItem(index) {
            this.$store.commit("REMOVE_ITEM",index)
        },
        editItem(item) {
            this.$store.commit("SET_CURRENTINPUT",item)
        }
    }
}
</script>

<style scoped>
input {
    margin-right: 10px;
}
.item {
    width: 100%;
    padding: 10px;
    text-align: left;
    font-size: 20px;
    margin-bottom: 10px;
    background-color: rgb(186, 210, 226);
    border-radius: 2px;
}
.action {
    float: right;
}


.btn-edit {
    width: 30px;
    height: 30px;
    border-radius: 3px;
    border: none;
    color: #fff;
    background-color: green;
    font-size: 15px;
    margin-right: 7px;
    cursor: pointer;
}

.btn-remove {
    width: 30px;
    height: 30px;
    border-radius: 3px;
    border: none;
    background-color: red;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
}
.done {
    text-decoration: line-through;
}


</style>