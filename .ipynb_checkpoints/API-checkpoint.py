from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# # Step 1
# @app.route('/get_chosen_formation', methods=['GET'])
# @cross_origin()
# def get_chosen_formation():
#     return jsonify({})

if __name__ == '__main__':
    app.run(debug=True)