<script setup>
import { watch } from 'vue';
import { food, quantity } from './caloriesCalculation.js'
import { calculateMacros } from './caloriesCalculation.js'

let debounceTimeout;

watch([food, quantity], () => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    const foodTrimed = food.value.trim();
    if (foodTrimed && quantity.value > 0){
      // console.log(foodTrimed);
      calculateMacros(foodTrimed, quantity.value)
    }
  }, 500); // wait 500ms after last input
});

</script> 

<template>
  <input type="text" v-model="food">
  <input type="number" v-model.number="quantity">
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