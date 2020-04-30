<template>
  <header>
    <ul>Danh sách công việc
      <demo-item 
        v-for="todo in todos" 
        v-bind:key="todo.name"
        v-bind:todo="todo"
        v-bind:abc="count"
        @handleCount="handleCount"
      >
      </demo-item>
    </ul>
    <input v-bind:type="type" v-bind:value="name" />
  </header>
</template>
<script>
import DemoItem from './DemoItem'
export default {
  name: 'Demo',
  data() {
    return {
      name: 'HoaiAn',
      count: 3,
      todos: [
        { name: 'Đánh răng', level: 1 },
        { name: 'Đi đái', level: 2 },
        { name: 'Ăn sáng', level: 0 },
      ],
      type: 'text'
    }
  },
  // computed chỉ thay đổi khi data thay đổi
  computed: {
    setUpperCase() {
      return this.name.toUpperCase()
    }
  },
  methods: {
    handleShowMes(msg) {
      this.count++
    },
    handleCount() {
      this.count++
    }
  },
  created() {
    console.log('Created đã chạy')
    // Lấy dữ liệu từ api
  },
  mounted() {
    // Load dữ liệu ra
    console.log('Đã được render ra màn hình')
  },
  components: {
    DemoItem
  }
}
</script>
<style lang="">
  
</style>
