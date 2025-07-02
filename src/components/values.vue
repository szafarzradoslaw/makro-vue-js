<script setup>
import { food, quantity, productCalories} from './caloriesCalculation.js'
</script>

<template>
    <p>Food : {{ food }}</p>
    <p>Quantity : {{ quantity }}</p>
    <p>Calories: {{ productCalories }}</p>
</template>

<style scoped>

</style>