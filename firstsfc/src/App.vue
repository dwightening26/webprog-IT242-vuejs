<template>
  <div>
    <h1>Fruits</h1>

    <div class="container">
      <FoodItem />
      <FoodItem2 />
    </div>

    <hr />

    <PersonalProfile />

    <hr />

    <ul>
      <li v-for="instrument in instruments" :key="instrument.id">
        {{ instrument.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

import FoodItem from './components/FoodItem.vue'
import FoodItem2 from './components/FoodItem2.vue'
import PersonalProfile from './components/PersonalProfile.vue'

const instruments = ref([])

onMounted(async () => {
  const { data, error } = await supabase.from('instruments').select()
  if (!error) {
    instruments.value = data
  }
})
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
