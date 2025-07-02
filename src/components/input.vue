<script setup>
import { watch } from 'vue';
import { productMacros , food, quantity } from './caloriesCalculation.js'
let debounceTimeout;

watch([food, quantity], ([newFood, newQuantity]) => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    productMacros(newFood, newQuantity);
  }, 300); // wait 300ms after last input
});

</script> 

<template>
  <input type="text" v-model="food">
  <input type="number" v-model.number="quantity">
</template>

<style scoped>
</style>