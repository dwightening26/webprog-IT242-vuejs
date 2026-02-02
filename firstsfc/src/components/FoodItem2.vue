<template>
  <div class="box">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Apples and Oranges',
      message: 'I like apples and oranges'
    }
  }
}
</script>

<style scoped>
.box {
  border: 1px dashed black;
  background-color: rgb(214, 102, 82);
  padding: 20px;
  flex: 1;
}
</style>
