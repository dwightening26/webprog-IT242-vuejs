<template>
  <div>
    <!-- Task 02 -->
    <h1>Fruits</h1>
    <div class="container">
      <food-item />
      <food-item2 />
    </div>

    <hr />

    <!-- Task 03 -->
    <Profile />
  </div>
</template>

<script>
import Profile from './components/Profile.vue'

export default {
  components: {
    Profile
  }
}
</script>

<style>
.container {
  display: flex;
  gap: 20px;
  align-items: stretch;
}

hr {
  margin: 40px 0;
}
</style>
