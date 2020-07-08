import time
import json
import pandas as pd
import numpy as np
from flask import Flask, make_response, jsonify, request

app = Flask(__name__)


@app.route('/river_stations')
def river_stations():
    with open('../../data_exploration/river_stations.json', 'r', encoding='utf-8') as json_file:
        result = json.load(json_file)
    return jsonify(result)


@app.route('/epa_data_stats')
def epa_data_stats():
    YEAR = int(request.args.get('year'))
    DATA_TYPE = request.args.get('dtype')
    FIELD = request.args.get('field')
    FIELD_MISSING = FIELD + '_missing'
    MISSING_VALUE = '--'

    df = pd.read_json('../data/final/' + DATA_TYPE + '.json')
    df = df[df['sampling_year'] == YEAR]
    df[FIELD] = df[FIELD].replace(MISSING_VALUE, np.nan)
    df = df.astype({FIELD: 'float'})
    df[FIELD_MISSING] = df[FIELD].isna()
    df = df.groupby(['sampling_year', 'station_no', 'address', 'lat', 'lon']).agg(
        {
            FIELD: ['min', 'max', 'mean', 'count'],
            FIELD_MISSING: ['sum', 'mean']
        }
    )
    df.columns = ['_'.join(col).strip() for col in df.columns.values]
    df = df.astype({FIELD_MISSING + '_sum': 'int32'})
    df[FIELD_MISSING + '_mean'] = df[FIELD_MISSING + '_mean'].round(4) * 100
    df[FIELD + '_mean'] = df[FIELD + '_mean'].round(2)

    df.rename(columns={
        FIELD + '_min': "min",
        FIELD + '_max': "max",
        FIELD + '_mean': "mean",
        FIELD + '_count': "count",
        FIELD_MISSING + '_sum': "num_missing",
        FIELD_MISSING + '_mean': "perc_missing",
    }, inplace=True)
    df = df.reset_index()
    df = df.dropna(how='any', subset=['min'])
    df_json = df.to_json(orient='records')
    return df_json
