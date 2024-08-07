from flask import Flask, jsonify, send_from_directory

app = Flask(__name__, static_folder='../frontend/public')

# Route to serve the frontend
@app.route('/')
def serve_frontend():
    return send_from_directory(app.static_folder, 'index.html')

# Route to get card data
@app.route('/api/cards')
def get_cards():
    cards = [
        {"id": 1, "name": "card1"},
        {"id": 2, "name": "card1"},
        {"id": 3, "name": "card2"},
        {"id": 4, "name": "card2"},
        # Add more pairs as needed
    ]
    return jsonify(cards)

if __name__ == '__main__':
    app.run(debug=True)
