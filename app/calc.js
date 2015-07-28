var CalcCtrl = function($timeout) {
  var calc = this;
  calc.memory = [];
  calc.latest = 0;
  calc.operator = "0";
  calc.$timeout = $timeout;
}

CalcCtrl.prototype.doAddition = function() {
  var calc = this;
  var times = 5;
  calc.latest = '. ';
  calc.$timeout(function tickslowly() {
    if (times == 0) {
      var latestResult;
      var first = parseInt(calc.first);
      var second = parseInt(calc.second);
      switch (calc.operator) {
        case "0":
          latestResult = first + second;
          break;
        case "1":
          latestResult = first - second;
          break;
        case "2":
          latestResult = first * second;
          break;
        case "3":
          latestResult = first / second;
          break;
        case "4":
          latestResult = first % second;
          break;
      }
      calc.memory.unshift({
        timestamp: new Date(),
        first: calc.first,
        operator: calc.operator,
        second: calc.second,
        value: latestResult
      });
      calc.first = calc.second = '';
      calc.latest = latestResult;
    } else {
      calc.latest += '. ';
      times--;
      calc.$timeout(tickslowly, 300);
    }
  }, 300)
};

var calculator = angular.module('calculator', []).
    controller('CalcCtrl', CalcCtrl);
