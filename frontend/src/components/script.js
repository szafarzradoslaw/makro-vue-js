import { ref } from 'vue'
let Today = new Date().toISOString().slice(0, 10);
let dayInfo = await getDayInfo()

const kalorieTotal = ref(dayInfo.kalorieTotal)
const proteinTotal = ref(dayInfo.proteinTotal)
const fatTotal = ref(dayInfo.fatTotal)
const carbsTotal = ref(dayInfo.carbsTotal)
// console.log(kalorieTotal.value, proteinTotal.value, fatTotal.value, carbsTotal.value)

async function getDayInfo() {
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
  postDayInfo(kalorieTotal.value, proteinTotal.value, fatTotal.value, carbsTotal.value)
}
async function postDayInfo(kalorieTotal, proteinTotal, fatTotal, carbsTotal) {
  try {
    const response = await fetch(`http://127.0.0.1:5000/api/get-day-info/${Today}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({kalorieTotal, proteinTotal, fatTotal, carbsTotal})
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result)
    return result;
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
}
export {
  getFood,
  calculateMacros,
  kalorieTotal,
  fatTotal,
  proteinTotal,
  carbsTotal,
}
