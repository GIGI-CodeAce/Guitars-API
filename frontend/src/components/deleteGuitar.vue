<template>
    <div class="p-4 text-[1.2em] font-medium">
      <p>Deleting guitar...</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  
  const route = useRoute()
  const router = useRouter()
  
  onMounted(async () => {
    const id = route.params.id
    
    if (!id) {
      console.error('❌ No ID found in route params:', route.params)
      return
    }
    
    try {
      const res = await fetch(`http://localhost:3000/guitars/${id}`, {
        method: 'DELETE',
      })
  
      if (res.ok) {
        console.log('✅ Guitar deleted')
      } else {
        console.error('❌ Failed to delete guitar')
      }
    } catch (err) {
      console.error('❌ Error deleting guitar:', err)
    } finally {
      router.push('/guitars')
    }
  })
  </script>
  