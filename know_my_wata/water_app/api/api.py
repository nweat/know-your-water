import time
import json
import pandas as pd
import numpy as np
from flask import Flask, make_response, jsonify

app = Flask(__name__)


@app.route('/river_stations')
def river_stations():
    with open('../../data_exploration/river_stations.json', 'r', encoding='utf-8') as json_file:
        result = json.load(json_file)
    return jsonify(result)


@app.route('/river_station_stats_rpi')
def riverstats_rpi():
    df = pd.read_json('../../data_exploration/river.json')
    df['river_pollution_index'] = df['river_pollution_index'].replace('--', np.nan)
    df = df.dropna(subset=['river_pollution_index'])
    df = df.astype({'river_pollution_index': 'float'})
    df = df.groupby(['sampling_month_year', 'station_no', 'address', 'lat', 'lon']).agg(
        {
            'river_pollution_index': ['min', 'max', 'mean']
        }).round(1)
    # combine hierarchical columns due to grouby
    df.columns = ['_'.join(col).strip() for col in df.columns.values]
    df = df.reset_index()
    df_dict = df.to_dict(orient='records')
    return jsonify(df_dict)
