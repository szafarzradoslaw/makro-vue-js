<script setup>
import { watch, ref } from 'vue';
import { calculateMacros } from './script.js'

const food = ref("")
const quantity = ref(0)


let debounceTimeout;

watch([food, quantity], () => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    if (food.value.trim() && quantity.value > 0){
      calculateMacros(food.value.trim(), quantity.value)
      food.value = ""
      quantity.value = 0
    }
  }, 500); // wait 500ms after last input
});

</script> 

<template>
  <div>
  <input type="text" v-model="food">
  <input type="number" v-model.number="quantity">
  </div>
</template>

<style scoped>
  input {
    padding: 8px 12px;
    font-size: 16px;
    border: 1.5px solid #ddd;
    border-radius: 6px;
    transition: border-color 0.3s;
  }
  input:focus {
    outline: none;
    border-color: #0f62fe; /* blue highlight like Streamlit */
    box-shadow: 0 0 8px rgba(15, 98, 254, 0.4);
  }
</style>