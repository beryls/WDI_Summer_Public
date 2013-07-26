function Train(name, stations) {
  this.name = name;
  this.stations = stations;
}

Train.prototype.distance = function(board, exit) {
  board = this.stations.indexOf(board);
  exit = this.stations.indexOf(exit);
  return Math.abs(board - exit);
};

var lStations = [ "8th", "6th", "Union Square", "3rd", "1st" ];
var nStations = [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ];
var sixStations = [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place" ];
var gStations = [ "Greenpoint", "Nassau", "Metropolitan", "Broadway" ];

var lTrain = new Train('L', lStations);
var nTrain = new Train('N', nStations);
var sixTrain = new Train('Six', sixStations);
var gTrain = new Train('G', gStations);

var trains = [lTrain, nTrain, sixTrain, gTrain];

function displayLines() {
  var trainNames = "";
  for (var i = 0; i < trains.length; i++) {
    trainNames += trains[i].name + '\n';
  }
  return trainNames.trim();
}

function findTrain(name) {
  for (var i = 0; i < trains.length; i++) {
    if (trains[i].name === name) {
      return trains[i];
    }
  }
}

Train.prototype.displayStations = function() {
  var stationNames = "";
  for (var i = 0; i < this.stations.length; i++) {
    stationNames += this.stations[i] + '\n';
  }
  return stationNames.trim();
}

Train.prototype.findStation = function(name) {
  for (var i = 0; i < this.stations.length; i++) {
    if (this.stations[i].name === name) {
      return this.stations[i];
    }
  }
}

var startTrain = findTrain(prompt("Which train would you like to get on?\n" + displayLines()));
var startStation = startTrain.findStation(prompt("Which station would you like to get on?\n" + startTrain.displayStations()));
console.log(startTrain.stations[0]);