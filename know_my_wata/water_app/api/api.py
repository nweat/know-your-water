import time
import json
from flask import Flask, make_response, jsonify

app = Flask(__name__)


@app.route('/river_stations')
def river_stations():
    with open('../../data_exploration/river_stations.json', 'r', encoding='utf-8') as json_file:
        result = json.load(json_file)
    return jsonify(result)
