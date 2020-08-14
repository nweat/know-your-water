import React, { useState } from 'react';
import 'react-vis/dist/style.css';
import { XYPlot, LineMarkSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, Crosshair } from 'react-vis';

const LineChart = ({ data }) => {
  const [val, setVal] = useState([]);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <XYPlot height={300} width={300}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis title="Month" position="middle" tickFormat={v => months[v - 1]} />
      <YAxis title="Value" position="middle" />
      <LineMarkSeries
        data={data}
        style={{
          strokeWidth: '3px'
        }}
        lineStyle={{ stroke: 'black' }}
        markStyle={{ stroke: 'blue' }}
        style={{ strokeLinejoin: 'round' }}
        onValueMouseOver={datapoint => {
          setVal([datapoint]);
        }}
        onValueMouseOut={() => {
          setVal([]);
        }}
      />
      {val.length > 0 && (
        <Crosshair values={val}>
          <div style={{ background: 'black', width: '60px', fontSize: '14px', borderRadius: '5px', textAlign: 'center' }}>
            <p>
              <b>{months[val[0].x - 1]}</b> <br />
              Result: <b>{val[0].y}</b>
            </p>
          </div>
        </Crosshair>
      )}
    </XYPlot>
  );
};

export default React.memo(LineChart);
