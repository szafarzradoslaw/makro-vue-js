<script setup>
import { ref, watch } from 'vue';
import { updateCalories, productCalories } from './caloriesCalculation.js'

const food = ref("")
const quantity = ref(0)
watch([food, quantity], ([newFood, newQuantity]) => {
  updateCalories(newFood, newQuantity);
}
)
</script> 

<template>
  <input type="text" v-model="food">
  <input type="number" v-model.number="quantity">
  <p>Food : {{ food }}</p>
  <p>Quantity : {{ quantity }}</p>
  <p>Calories: {{ productCalories }}</p>
</template>

<style scoped>
</style>