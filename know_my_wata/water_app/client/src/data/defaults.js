export const defaultLocation = { lat: 23.755182, lon: 120.877075 };
export const defaultZoom = 10;

//EPA dataset names - name of JSON in data/final/*.json
export const RIVER_DATASET_NAME = 'river';
export const DAM_DATASET_NAME = 'dam';

//field names considered for analysis, as it appears in EPA dataset
export const RIVER_RPI = 'rpi';
export const RIVER_PH = 'PH';
export const DAM_CTSI = 'ctsi';

//define field list to be used for generating select field options
export const selectFilters = {
  RIVER_STATIONS: [RIVER_RPI, RIVER_PH],
  DAM_STATIONS: [DAM_CTSI]
};

//define default years to be used for generating select year options
export const defaultYear = 'All Years';
export const RIVER_RPI_DEFAULT_YEAR = defaultYear;
export const DAM_CTSI_DEFAULT_YEAR = defaultYear;
export const DEFAULT_YEARS = [defaultYear, 2019, 2018, 2017];

//river settings
export const river = {
  color: '#00BCDD',
  weight: 2,
  opacity: 1
};

export const circleMarker = {
  radius: 4,
  weight: 1,
  fillOpacity: 0.9
};

//legends
export const riverstat_legends = [
  {
    type: RIVER_RPI,
    description:
      'River Pollution Index (RPI) is an indicator used to determine the river pollution level. Over 300 stations around Taiwan are constantly monitored.',
    legend: [
      {
        name: 'Not Polluted (≦ 2)',
        color: '#008CC1'
      },
      {
        name: 'Lightly Polluted (2 ＜ RPI ≦ 3)',
        color: '#298784'
      },
      {
        name: 'Moderately Polluted (3.1 ≦ RPI ≦ 6)',
        color: '#528147'
      },
      {
        name: 'Severely Polluted (＞ 6 )',
        color: '#827B00'
      }
    ]
  },
  {
    type: RIVER_PH,
    description: 'pH is a measure of how acidic water is. The ideal pH level of drinking water should be between 6 - 8.5',
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

export const damstat_legends = [
  {
    type: DAM_CTSI,
    description:
      'Carlson’s Trophic State Index (CTSI) is an indicator used to determine the water condition in reservoirs. Oligotrophic reservoirs have the least amount of biological productivity resulting in better drinking water quality.',
    legend: [
      {
        name: 'Oligotrophic (< 40)',
        color: '#3FB108'
      },
      {
        name: 'Mesotrophic (40 ≦ CTSI ≦ 50)',
        color: '#BCB300'
      },
      {
        name: 'Eutrophic (> 50)',
        color: '#B40C0C '
      }
    ]
  }
];
