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
      name: 'Grapes and Strawberies',
      message: 'I like Grapes and Strawberies'
    }
  }
}
</script>

<style>
.box {
  border: 1px dashed black;
  background-color: rgb(201, 98, 106);
  padding: 20px;
  flex: 1;
}
</style>
