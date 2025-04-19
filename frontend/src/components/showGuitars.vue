<template>
  <div class="p-4 text-[1.2em] font-medium">
    <h1 class="underline">🎸 Guitars</h1>

    <ul v-if="guitars.length" :class="listStyle">
      <li
        class="hover:text-red-400 text-red-700 list-decimal ml-6"
        v-for="guitar in guitars"
        :key="guitar._id"
      >
        <router-link class="text" :to="`/guitars/${guitar._id}`">
          {{ guitar.make }} {{ guitar.model }}
        </router-link>
      </li>
    </ul>
    <div v-else :class="listStyle">
      <p :class="`${itemStyle} ml-[0px]`">No guitars found..</p>
      <p :class="`${itemStyle} ml-[0px]`">↓ Start by adding one!</p>
    </div>
  </div>

  <router-link
    class="bg-green-700 p-[6px] hover:text-white transition-colors rounded-2xl m-6"
    to="/guitars/add"
  >
    Add guitar
  </router-link>
</template>

  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  
  interface Guitar {
    _id: string
    make: string
    model: string
  }
  
  
  const guitars = ref<Guitar[]>([])
  const listStyle = "bg-green-900 w-full p-4 rounded-xl"
  const itemStyle = "hover:text-red-400 text-red-700 list-decimal ml-6"
  
  onMounted(async () => {
    const res = await fetch('http://localhost:3000/guitars')
    guitars.value = await res.json()
  })
  </script>
  