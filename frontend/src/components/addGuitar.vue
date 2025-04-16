<template>
    <main class="p-4 text-[1.2em] font-medium">
      <div class="bg-green-600 rounded-xl p-3">
        <h1>➕ Add a New Guitar</h1>
        <input v-model="make" :class="inputStyle" placeholder="Make" />
        <input v-model="model" :class="inputStyle" placeholder="Model" />
        <button
          :class="buttonsStyle"
          @click="addGuitar"
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
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const make = ref('')
  const model = ref('')
  const router = useRouter()
  
  const inputStyle = "block my-2 p-1 rounded-xl border-2"
  const buttonsStyle = "bg-green-700 p-[6px] hover:text-white transition-colors rounded-2xl m-1"
  
  const addGuitar = async () => {
    if (!make.value || !model.value) {
      alert("Make and model are required.")
      return
    }
  
    const res = await fetch('http://localhost:3000/guitars', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        make: make.value,
        model: model.value
      })
    })
  
    if (res.ok) {
      router.push('/guitars')
    } else {
      alert("Failed to add guitar.")
    }
  }
  </script>
  