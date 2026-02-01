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
      name: 'Banana',
      message: 'I like Banana'
    }
  }
}
</script>

<style>
.box {
  border: 1px dashed black;
  background-color: rgb(219, 236, 119);
  padding: 20px;
  flex: 1;
}
</style>
