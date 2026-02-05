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

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

const instruments = ref([])

async function getInstruments() {
  const { data } = await supabase.from('instruments').select()
  instruments.value = data
}

onMounted(() => {
   getInstruments()
})
</script>

<template>
  <ul>
    <li v-for="instrument in instruments" :key="instrument.id">{{ instrument.name }}</li>
  </ul>
</template>