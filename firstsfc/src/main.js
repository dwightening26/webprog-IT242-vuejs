import { createApp } from 'vue'
 
import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
 
const app = createApp(App)
app.component('food-item', FoodItem)
app.mount('#app')
 
App.vue
 
 
<template>
  <h1>Food</h1>
  <food-item/>
  <food-item/>
  <food-item/>
</template>
 
<script></script>
 
<style></style>
 