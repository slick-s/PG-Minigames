from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
import random
import os

app = Flask(__name__)
CORS(app)

class MemoryGame:
    def __init__(self):
        self.cards = [
            {"id": 1, "name": "card1", "front_image": "CptAmerica.png", "back_image": "Marvel.jpg"},
            {"id": 2, "name": "card1", "front_image": "CptAmerica.png", "back_image": "Marvel.jpg"},
            {"id": 3, "name": "card2", "front_image": "Hulk.png", "back_image": "Marvel.jpg"},
            {"id": 4, "name": "card2", "front_image": "Hulk.png", "back_image": "Marvel.jpg"},
            {"id": 5, "name": "card3", "front_image": "Ironman.png", "back_image": "Marvel.jpg"},
            {"id": 6, "name": "card3", "front_image": "Ironman.png", "back_image": "Marvel.jpg"},
            {"id": 7, "name": "card4", "front_image": "Thor.png", "back_image": "Marvel.jpg"},
            {"id": 8, "name": "card4", "front_image": "Thor.png", "back_image": "Marvel.jpg"},
        ]
        self.game_state = []

    def start_game(self):
        self.game_state = random.sample(self.cards, len(self.cards))
        return self.game_state

    def initialize_game(self):
        self.game_state = []
        return self.game_state

    def create_new_game(self):
        return self.start_game()

# Create a MemoryGame instance
game = MemoryGame()

@app.route('/api/new', methods=['POST'])
def create_new_game():
    print("Create new game (POST) endpoint hit")
    game_state = game.create_new_game()
    return jsonify(game_state)

@app.route('/api/new_game', methods=['GET'])
def new_game():
    print("Create new game (GET) endpoint hit")
    game_state = game.create_new_game()
    return jsonify(game_state)


@app.route('/api/start', methods=['POST'])
def start_game():
    print("Start game endpoint hit")
    game_state = game.start_game()
    return jsonify(game_state)

@app.route('/api/initialize', methods=['POST'])
def initialize_game():
    print("Initialize game endpoint hit")
    game_state = game.initialize_game()
    return jsonify(game_state)

@app.route('/img/<path:filename>')
def serve_image(filename):
    return send_from_directory(os.path.join(app.root_path, 'img'), filename)

if __name__ == '__main__':
    app.run(debug=True)
