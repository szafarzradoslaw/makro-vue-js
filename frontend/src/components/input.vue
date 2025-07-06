<script setup>
import { watch } from 'vue';
import { food, quantity } from './caloriesCalculation.js'
import { getFood } from './caloriesCalculation.js'
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
</style>