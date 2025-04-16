<template>
    <div class="p-4 text-[1.2em] font-medium">
      <h1 class="underline">🎸 Guitars</h1>
      <ul class="bg-green-900 w-full p-4 rounded-xl">
        <li class="hover:text-red-400 text-red-700 list-decimal ml-6" v-for="guitar in guitars" :key="guitar.id">
          <router-link class="text" :to="`/guitars/${guitar.id}`">{{ guitar.make }} {{ guitar.model }}</router-link>
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
  