<template>
  <button @click="handleClick">{{ message }}</button>
</template>

<script>
export default {
  name: 'GreeterComponent',
  props: {
    message: String
  },
  methods: {
    handleClick() {
      console.log(this.message);
    }
  }
}
</script>

<style scoped>
button {
  padding: 8px 16px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>