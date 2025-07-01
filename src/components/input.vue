<script setup>
import { ref, watch } from 'vue'
const food = ref("")
const quantity = ref(0)
const productCalories = ref(0)
const foodList = ref([])

const foodCalories = {
  apple : 200,
  banana : 100,
};

watch([food, quantity], ([newFood, newQuantity]) => {
  if (newFood in foodCalories && newQuantity > 0) {
    let caloriesPer100 = foodCalories[newFood]
    productCalories.value = caloriesPer100 * 0.01 * newQuantity


    lastProduct = foodList.value[foodList.value.length - 1]

    if (lastProduct == newFood){
      lastProduct.quantity = newQuantity;
      lastProduct.productCalories = productCalories.value;
    }
    else{
      foodList.value.push({
      food: newFood,
      quantity: newQuantity,
      productCalories: productCalories.value,
    })
    }
  }
})
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