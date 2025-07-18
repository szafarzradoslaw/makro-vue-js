import { ref } from 'vue'


let dayInfo = await getDayInfo()
const kalorieTotal = ref(dayInfo.calories)
const proteinTotal = ref(dayInfo.protein)
const fatTotal = ref(dayInfo.fat)
const carbsTotal = ref(dayInfo.carbs)
// console.log(kalorieTotal.value, proteinTotal.value, fatTotal.value, carbsTotal.value)

async function getDayInfo() {
  let Today = new Date().toISOString().slice(0, 10);
  try{
    const response = await fetch(`http://127.0.0.1:5000/api/get-day-info/${Today}`)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
  }
}


async function getFood(food) {
  try {
    const response = await fetch(`http://127.0.0.1:5000/api/get-food-data/${food}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

async function calculateMacros(food, quantity) {
  const data = await getFood(food);
  kalorieTotal.value += (data.calories * quantity * 0.01);
  proteinTotal.value += (data.protein * quantity * 0.01);
  fatTotal.value += (data.fat * quantity * 0.01);
  carbsTotal.value += (data.carbs * quantity * 0.01);
}

export {
  getFood,
  calculateMacros,
  kalorieTotal,
  fatTotal,
  proteinTotal,
  carbsTotal,
}
