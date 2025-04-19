<template>
    <main class="p-4 text-[1.2em] font-medium">
      <div class="bg-green-600 rounded-xl p-3" v-if="guitar">
        <h1>🎸 Guitar Details</h1>
        <h4 class="text-[0.8em]">ID: {{ guitar._id }}</h4>
        <input v-model="guitar.make" :class="inputStyle" />
        <input v-model="guitar.model" :class="inputStyle"  />
        <button
          :class="buttonsStyle"
          @click="updateGuitar"
        >
          Submit
        </button>
        <router-link
          :class="buttonsStyle"
          to="/guitars"
        >
          Go to Guitars
        </router-link>
      </div>
    </main>
  </template>
  
  
  <script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface Guitar {
  _id: string
  make: string
  model: string
}

const guitar = ref<Guitar | null>(null)
const route = useRoute()
const router = useRouter()
const inputStyle = "block my-2 p-1 rounded-xl border-2"
const buttonsStyle = "bg-green-700 p-[6px] hover:text-white transition-colors rounded-2xl m-1"

onMounted(async () => {
  const id = route.params.id
  const res = await fetch(`http://localhost:3000/guitars/${id}`)
  if (res.ok) {
    guitar.value = await res.json()
  } else {
    console.error('Guitar not found')
  }
})

const updateGuitar = async () => {
  if (!guitar.value) return
  const res = await fetch(`http://localhost:3000/guitars/${guitar.value._id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      make: guitar.value.make,
      model: guitar.value.model
    })
  })

  if (res.ok) {
    router.push('/guitars')
  } else {
    alert('Failed to update guitar.')
  }
}

  </script>
  