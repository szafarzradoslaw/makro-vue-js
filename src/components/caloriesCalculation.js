import { ref } from 'vue'
const foodList = ref([])
const food = ref("")
const quantity = ref(0)

const foodMacros = {
  apple: {
    calories: 200,
    protein: 10,
    fat: 10,
    carbs: 50,
  },
  banana: {
    calories: 100,
    protein: 20,
    fat: 10,
    carbs: 0,
  }
}

function productMacros(newFood, newQuantity){
  if (newFood in foodMacros && newQuantity > 0){
    let foodCalories = foodMacros[newFood].calories * 0.01 * newQuantity
    let foodProtein = foodMacros[newFood].protein * 0.01 * newQuantity
    let foodFat = foodMacros[newFood].fat * 0.01 * newQuantity
    let foodCarbs = foodMacros[newFood].carbs * 0.01 * newQuantity

    console.log(foodCalories, foodProtein, foodFat, foodCarbs)
  }
}
export {
  food,
  quantity,
  productMacros,
}
