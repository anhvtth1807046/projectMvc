<template>
  <li>
    {{todo.name}} - {{todo.level}} - {{abc}}
    <button @click="handleClick">Click</button>
  </li>
</template>
<script>
export default {
  props: ['todo', 'abc'],
  methods: {
    handleClick() {
      this.$emit('handleCount')
    }
  }
}
</script>
<style>
</style>