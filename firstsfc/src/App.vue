<template>
  <div>
    <h1>Fruits</h1>
    <div class="container">
      <food-item />
      <food-item2 />
    </div>

    <hr />

    <PersonalProfile />
  </div>
</template>

<script>
import PersonalProfile from './components/PersonalProfile.vue'

export default {
  components: {
    PersonalProfile
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
