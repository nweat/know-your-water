export const defaultLocation = { lat: 23.755182, lon: 120.877075 };
export const defaultZoom = 12;

//fields must appear as in the raw dataset
export const RIVER_RPI = 'rpi';
export const RIVER_PH = 'PH';
export const DAM_CTSI = 'CTSI';

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
    legend: [
      {
        name: '4',
        color: '#D90259'
      },
      {
        name: '5',
        color: '#E3625B'
      }
    ]
  }
];
