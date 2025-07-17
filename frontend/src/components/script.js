import { ref } from 'vue'

const kalorieTotal = ref(0)
const proteinTotal = ref(0)
const fatTotal = ref(0)
const carbsTotal = ref(0)

async function getDayInfo() {
  let Today = new Date().toISOString().slice(0, 10);
  try{
    const response = await fetch(`http://127.0.0.1:5000/api/day-info/${Today}`)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

let test = await getDayInfo();
console.log(test);

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
