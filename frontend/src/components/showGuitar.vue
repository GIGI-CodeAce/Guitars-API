<template>
  <main class="p-4 text-[1.2em] font-medium">
    <div class="bg-green-600 rounded-xl p-3" v-if="guitar">
    <h1>🎸 Guitar Details</h1>
    <p><strong>Make:</strong><hr/> {{ guitar.make }}</p>
    <p class="mb-4"><strong>Model:</strong><hr/>  {{ guitar.model }}</p>
      <router-link class="bg-green-700 p-[6px] hover:text-white transition-colors rounded-2xl m-1" :to="`/guitars/${guitar.id}/delete`">Delete Guitar</router-link>
      <router-link class="bg-green-700 p-[6px] hover:text-white transition-colors rounded-2xl m-1" to="/guitars">Go to Guitars</router-link>
  </div>
  <div v-else>
    <p>Loading guitar...</p>
  </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

interface Guitar {
  id: number
  make: string
  model: string
}

const guitar = ref<Guitar | null>(null)
const route = useRoute()

onMounted(async () => {
  const id = route.params.id
  const res = await fetch(`http://localhost:3000/guitars/${id}`)
  if (res.ok) {
    guitar.value = await res.json()
  } else {
    console.error('Guitar not found')
  }
})

</script>
