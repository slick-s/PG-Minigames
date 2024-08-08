from flask import Flask, jsonify, request, send_from_directory, render_template, redirect, url_for
from flask_cors import CORS
import random
import os

app = Flask(__name__)
CORS(app)

class MemoryGame:
    def __init__(self):
        self.cards = [
            {"id": 1, "name": "card1", "front_image":"Marvel.jpg" , "back_image": "CptAmerica.png"},
            {"id": 2, "name": "card1", "front_image": "Marvel.jpg", "back_image": "CptAmerica.png"},
            {"id": 3, "name": "card2", "front_image": "Marvel.jpg", "back_image": "Hulk.png"},
            {"id": 4, "name": "card2", "front_image": "Marvel.jpg", "back_image": "Hulk.png"},
            {"id": 5, "name": "card3", "front_image": "Marvel.jpg", "back_image": "Ironman.png"},
            {"id": 6, "name": "card3", "front_image": "Marvel.jpg", "back_image": "Ironman.png"},
            {"id": 7, "name": "card4", "front_image": "Marvel.jpg", "back_image": "Thor.png"},
            {"id": 8, "name": "card4", "front_image": "Marvel.jpg", "back_image": "Thor.png"},
            {"id": 9, "name": "card4", "front_image": "Marvel.jpg", "back_image": "hawkman.png"},
            {"id": 10, "name": "card4", "front_image": "Marvel.jpg", "back_image": "hawkman.png"},
            {"id": 11, "name": "card4", "front_image": "Marvel.jpg", "back_image": "Spiderman.png"},
            {"id": 12, "name": "card4", "front_image": "Marvel.jpg", "back_image": "Spiderman.png"},
            {"id": 13, "name": "card4", "front_image": "Marvel.jpg", "back_image": "Antman.png"},
            {"id": 14, "name": "card4", "front_image": "Marvel.jpg", "back_image": "Antman.png"},
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

#Route for homepage (in order to access the Memorygame)
@app.route('/', methods=['GET'])
def home():
    return render_template('index.html')

#Route to handle the login
@app.route('/login', methods=['POST'])
def login():
    return redirect(url_for('game')) #checks username and password if valid

#Route for guest access
@app.route('/guest', methods=['GET'])
def guest():
    return redirect(url_for('game'))

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
