import time
import json
from flask import Flask

app = Flask(__name__)


@app.route('/river_stations')
def river_stations():
    with open('../../data_exploration/river_stations.json', 'r', encoding='utf-8') as json_file:
        result = json.load(json_file)
    return {'data': result}


@app.route('/rivers')
def rivers():
    with open('../../data_exploration/rivers_geocoded_nominatum.json', 'r', encoding='utf-8') as json_file:
        result = json.load(json_file)
    return {'data': result}
