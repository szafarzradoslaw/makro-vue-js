import { ref } from 'vue'
const foodList = ref([])
const food = ref("")
const quantity = ref(0)

const foodMacros = {
  apple: {
    calories: 100,
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
    console.log(newFood, newQuantity)
  }
}
export {
  food,
  quantity,
  productMacros,
}
