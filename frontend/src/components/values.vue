<script setup>
import { kalorieTotal, proteinTotal, fatTotal, carbsTotal } from './script';
</script>

<template>
    <div class="box-container">
    <div class="value-box">
      <div class="value">{{Math.round(kalorieTotal)}}</div>
      <div class="label">Calories</div>
    </div>
    <div class="value-box">
      <div class="value">{{Math.round(proteinTotal)}}</div>
      <div class="label">Protein</div>
    </div>
    <div class="value-box">
      <div class="value">{{Math.round(fatTotal)}}</div>
      <div class="label">Fat</div>
    </div>
    <div class="value-box">
      <div class="value">{{Math.round(carbsTotal)}}</div>
      <div class="label">Carbs</div>
    </div>
    </div>
</template>

<style scoped>
.box-container {
  display: flex;
  gap: 16px;
  padding: 16px;
}

.value-box {
  background: #f5f5f5;
  color: #333;
  border-radius: 6px;
  padding: 16px 24px;
  width: 100px;
  text-align: center;
  font-family: system-ui, sans-serif;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.value {
  font-weight: 600;
  font-size: 1.5rem;
}

.label {
  font-size: 0.85rem;
  color: #666;
  margin-top: 4px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
</style>
