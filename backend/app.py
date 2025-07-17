import json
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

@app.route('/api/day-info/<day>', methods=['GET'])
def day_info(day):
    with open(f"../databases/{day}.json", encoding='utf-8') as file:
        data = json.load(file)
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)  # Run the Flask server with debug mode on for easy testing
