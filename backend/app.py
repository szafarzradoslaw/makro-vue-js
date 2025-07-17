import json               # To read JSON files
from flask import Flask, jsonify, request
from flask_cors import CORS  # type: ignore # To allow cross-origin requests (frontend <-> backend)

app = Flask(__name__)
CORS(app)  # Enable CORS so your frontend (usually on a different port) can request data

# Load food data once on server startup
with open('../database/food-macros.json', encoding='utf-8') as file:
    food_macros = json.load(file)  # This loads the JSON array as a Python list of dicts

@app.route('/api/get-food-data/<name>', methods=['GET'])
def get_food(name):
    food_item = None
    for item in food_macros:
        if item["product"].lower() == name.lower():
            food_item = item
    if food_item:
        return jsonify(food_item)
    else:
        return jsonify({"error": "Food not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)  # Run the Flask server with debug mode on for easy testing
