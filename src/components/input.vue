<script setup>
import { watch } from 'vue';
import { updateCalories, productCalories, food, quantity } from './caloriesCalculation.js'

watch([food, quantity], ([newFood, newQuantity]) => {
  updateCalories(newFood, newQuantity);
}
)
</script> 

<template>
  <input type="text" v-model="food">
  <input type="number" v-model.number="quantity">
  
</template>

<style scoped>
</style>