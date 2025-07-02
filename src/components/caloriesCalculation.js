import { ref } from 'vue'

const productCalories = ref(0)
const foodList = ref([])
const food = ref("")
const quantity = ref(0)

const foodCalories = {
  apple: 200,
  banana: 100,
}

function updateCalories(newFood, newQuantity) {
  if (newFood in foodCalories && newQuantity > 0) {
    let caloriesPer100 = foodCalories[newFood]
    productCalories.value = caloriesPer100 * 0.01 * newQuantity

    const lastProduct = foodList.value[foodList.value.length - 1]
    if (lastProduct && lastProduct.food === newFood) { // check if lastProduct exists
      lastProduct.quantity = newQuantity
      lastProduct.productCalories = productCalories.value
    } else {
      foodList.value.push({
        food: newFood,
        quantity: newQuantity,
        productCalories: productCalories.value,
      })
    }
  } else {
    productCalories.value = 0
  }
}

export {
  food,
  quantity,
  productCalories,
  foodList,
  updateCalories,
}
