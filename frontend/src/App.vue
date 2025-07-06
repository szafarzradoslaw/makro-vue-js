<script setup>
import Input from './components/input.vue'
import Values from './components/values.vue';
</script>

<template>
    <div class="app-container">
    <div class="content">
      <Values /> 
      <Input />
    </div>
  </div>
</template>

<style scoped>
.app-container {
  height: 100vh;
  display: flex;
  justify-content: center; /* center horizontally */
  align-items: flex-start;  /* align from top */
}

.content {
  margin-top: 20vh; /* push it down by 20% of the viewport height */
  display: flex;
  flex-direction: column;
  gap: 24px; /* space between Values and Input */
  align-items: center;
}
  
</style>
