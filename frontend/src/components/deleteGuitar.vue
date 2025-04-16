<template>
    <div class="p-4 text-[1.2em] font-medium">
      <p>Deleting guitar...</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  
  onMounted(async () => {
    const route = useRoute()
    const router = useRouter()
    const id = route.params.id
  
    try {
      const res = await fetch(`http://localhost:3000/guitars/${id}`, {
        method: 'DELETE',
      })
  
      if (res.ok) {
        console.log('Guitar deleted')
      } else {
        console.error('Failed to delete guitar')
      }
    } catch (err) {
      console.error('Error deleting guitar:', err)
    } finally {
      router.push('/guitars')
    }
  })
  </script>
  