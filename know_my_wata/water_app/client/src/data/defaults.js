export const defaultLocation = { lat: 23.755182, lon: 120.877075 };
export const defaultZoom = 11;

//fields must appear as in the raw dataset
export const RIVER_RPI = 'rpi';
export const RIVER_PH = 'PH';
export const DAM_CTSI = 'CTSI';
export const RIVER_RPI_DEFAULT_YEAR = 2019;
export const DEFAULT_YEARS = [2019, 2018, 2017];

export const selectFilters = {
  RIVER_STATIONS: [RIVER_RPI, RIVER_PH],
  DAM_STATIONS: [DAM_CTSI]
};

export const river = {
  color: '#00BCDD',
  weight: 2,
  opacity: 1
};

export const riverStationCircleMarker = {
  radius: 4,
  weight: 1,
  fillOpacity: 0.9
};

export const riverstat_legends = [
  {
    type: RIVER_RPI,
    description: 'this is rpi description',
    legend: [
      {
        name: 'Not Polluted (1)',
        color: '#008CC1'
      },
      {
        name: 'Lightly Polluted (3)',
        color: '#298784'
      },
      {
        name: 'Moderately Polluted (6)',
        color: '#528147'
      },
      {
        name: 'Severely Polluted (10)',
        color: '#827B00'
      }
    ]
  },
  {
    type: RIVER_PH,
    description: 'this is PH description',
    legend: [
      {
        name: '4',
        color: '#DC7633'
      },
      {
        name: '5',
        color: '#EB984E '
      },
      {
        name: '6',
        color: '#F5B041'
      },
      {
        name: '7',
        color: '#F4D03F'
      },
      {
        name: '8+',
        color: '#138D75'
      }
    ]
  }
];
