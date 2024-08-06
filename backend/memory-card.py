from flask import Flask, request, jsonify

app = Flask(__name__)

# In-memory game state (for simplicity, use a database for production)
game_state = {}

@app.route('/start-game', methods=['POST'])
def start_game():
    # Initialize game state
    game_state['cards'] = ['card1', 'card2', 'card1', 'card2']  # Example
    game_state['flipped'] = []
    return jsonify(game_state)

@app.route('/flip-card', methods=['POST'])
def flip_card():
    data = request.json
    card_index = data.get('index')
    if card_index not in game_state['flipped']:
        game_state['flipped'].append(card_index)
    return jsonify(game_state)

@app.route('/reset-game', methods=['POST'])
def reset_game():
    game_state['flipped'] = []
    return jsonify(game_state)

if __name__ == '__main__':
    app.run(debug=True)
