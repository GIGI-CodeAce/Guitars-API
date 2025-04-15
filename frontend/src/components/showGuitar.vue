<template>
  <div v-if="guitar">
    <h1>🎸 Guitar Details</h1>
    <p><strong>Make:</strong> {{ guitar.make }}</p>
    <p><strong>Model:</strong> {{ guitar.model }}</p>
  </div>
  <div v-else>
    <p>Loading guitar...</p>
  </div>
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
