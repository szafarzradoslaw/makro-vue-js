import { ref } from 'vue'
const food = ref("")
const quantity = ref(0)
const kalorieTotal = ref(0)
const proteinTotal = ref(0)
const fatTotal = ref(0)
const carbsTotal = ref(0)

async function getFood(food) {
  try {
    const response = await fetch(`http://127.0.0.1:5000/api/food/${food}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

async function calculateMacros(food, quantity){
  const data = await getFood(food);
  kalorieTotal.value += (data.calories * quantity * 0.01)
  proteinTotal.value +=  (data.protein * quantity * 0.01)
  fatTotal.value  += (data.fat * quantity * 0.01)
  carbsTotal.value += (data.carbs * quantity * 0.01)
  console.log(kalorieTotal.value, proteinTotal.value, fatTotal.value, carbsTotal.value )
}

export {
  food,
  quantity,
  getFood,
  calculateMacros,
  kalorieTotal,
  fatTotal,
  proteinTotal,
  carbsTotal,
}
