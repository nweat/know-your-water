import time
import json
import os
import pandas as pd
import numpy as np
from flask import Flask, make_response, jsonify, request

app = Flask(__name__, static_folder='../client/build', static_url_path='/')
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/pollution_sources')
def pollution_sources():
    final = os.path.join(os.path.join(os.path.join(BASE_DIR, "data"), "pollution_sources"),  'pollution_sources.json')
    df = pd.read_json(final)
    df_json = df.to_json(orient='records')
    return df_json


@app.route('/epa_data_stats')
def epa_data_stats():
    DATA_TYPE = request.args.get('dtype')
    FIELD = request.args.get('field')
    FIELD_MISSING = FIELD + '_missing'
    MISSING_VALUE = '--'
    groupBy = []
    groupByRaw = []
    raw_data = []
    final = os.path.join(os.path.join(os.path.join(BASE_DIR, "data"), "final"), DATA_TYPE + '.json')

    df = pd.read_json(final)
    if request.args.get('year'):
        YEAR = int(request.args.get('year'))
        df = df[df['sampling_year'] == YEAR]
        groupBy = ['station_no', 'address', 'lat', 'lon']
        groupByRaw = ['station_no', 'sampling_month_year']
    else:
        groupBy = ['station_no', 'address', 'lat', 'lon']
        groupByRaw = ['station_no', 'sampling_month_year']

    df[FIELD] = df[FIELD].str.replace('<', '')
    df[FIELD] = df[FIELD].replace(MISSING_VALUE, np.nan)
    df = df.astype({FIELD: 'float'})
    df[FIELD_MISSING] = df[FIELD].isna()
    river_raw = df.groupby(groupByRaw, as_index=False)[FIELD].sum()

    df = df.groupby(groupBy).agg(
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

    # get raw data by month
    raw_data = {}
    stations = river_raw['station_no'].unique()
    for station in stations:
        months = [{'x':1, 'y':0},{'x':2, 'y':0},{'x':3, 'y':0},{'x':4, 'y':0},{'x':5, 'y':0},{'x':6, 'y':0},
              {'x':7, 'y':0},{'x':8, 'y':0},{'x':9, 'y':0},{'x':10, 'y':0},{'x':11, 'y':0},{'x':12, 'y':0}]
        data = river_raw[river_raw['station_no'] == station]
        for idx, row in data.iterrows():
            months[int(row['sampling_month_year']) - 1]['y'] = round(row[FIELD], 2)
        station = str(station)
        raw_data[station] = months

    # print(raw_data)
    df_json = df.to_json(orient='records')
    data = {'stats': json.loads(df_json), 'raw': raw_data}
    return data
