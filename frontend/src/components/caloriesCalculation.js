import { ref } from 'vue'
const food = ref("")
const quantity = ref(0)


async function getFood(food) {
  try {
    const response = await fetch(`http://127.0.0.1:5000/api/food/${food}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

async function calculateMacros(food, quantity){
  const data = await getFood(food);
  const kalorie = (data.calories * quantity * 0.01)
  console.log(kalorie)
}

export {
  food,
  quantity,
  getFood,
  calculateMacros,
}
