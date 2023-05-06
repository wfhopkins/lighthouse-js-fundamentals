const chooseStations = function(stations) {
  const goodStations = [];
  for (const station of stations) {
    if (station[1] >= 20 && (station[2] === 'community centre' || station[2] === 'school')) {
      goodStations.push(station[0]);
    }
  }return goodStations;
};

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];
//
chooseStations(stations);