import json
import os
from flask import Flask, jsonify, request
from flask_cors import CORS  # type: ignore # To allow cross-origin requests (frontend <-> backend)

app = Flask(__name__)
CORS(app)  # Enable CORS so your frontend (usually on a different port) can request data

# Load food data once on server startup
with open('../databases/food-macros.json', encoding='utf-8') as file:
    food_macros = json.load(file)  # This loads the JSON array as a Python list of dicts

@app.route('/api/get-food-data/<food>', methods=['GET'])
def get_food(food):
    food_item = None
    for item in food_macros:
        if item["product"].lower() == food.lower():
            food_item = item
    if food_item:
        return jsonify(food_item)
    else:
        return jsonify({"error": "Food not found"}), 404

@app.route('/api/day-info/<day>', methods=['GET', 'POST'])
def day_info(day):
    if os.path.exists(f"../databases/day-info/{day}.json"):
        with open(f"../databases/day-info/{day}.json", encoding='utf-8') as file:
            data = json.load(file)
            print(data)
            return jsonify(data)
    else:
        empty_day = {
        "calories" : 0,
        "protein" : 0,
        "fat" : 0,
        "carbs" : 0
        }
        empty_day = json.dumps(empty_day)
        with open(f"../databases/day-info/{day}.json", "w") as file:
            file.write(empty_day)
        return empty_day
        
if __name__ == '__main__':
    app.run(debug=True)  # Run the Flask server with debug mode on for easy testing
