<template>
    <div>
      <h1>🎸 Guitars</h1>
      <ul>
        <li v-for="guitar in guitars" :key="guitar.id">
          {{ guitar.make }} {{ guitar.model }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  
  interface Guitar {
    id: number
    make: string
    model: string
  }
  
  const guitars = ref<Guitar[]>([])
  
  onMounted(async () => {
    const res = await fetch('http://localhost:3000/guitars')
    guitars.value = await res.json()
  })
  </script>
  