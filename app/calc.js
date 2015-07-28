var CalcCtrl = function($timeout) {
  var calc = this;
  calc.memory = [];
  calc.latest = 0;
  calc.operators = {
    ADDITION: '+',
    SUBTRACTION: '-',
    MULTIPLICATION: '*',
    DIVISION: '/',
    MODULO: '%'
  };
  calc.operator = calc.operators.ADDITION;

  calc.doAddition = function() {
    var times = 5;
    calc.latest = '. ';
    $timeout(function tickslowly() {
      if (times == 0) {
        var latestResult;
        var first = parseInt(calc.first);
        var second = parseInt(calc.second);
        switch (calc.operator) {
          case '+':
            latestResult = first + second;
            break;
          case '-':
            latestResult = first - second;
            break;
          case '*':
            latestResult = first * second;
            break;
          case '/':
            latestResult = first / second;
            break;
          case '%':
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
        $timeout(tickslowly, 300);
      }
    }, 300)
  };
};

var calculator = angular.module('calculator', []).
    controller('CalcCtrl', CalcCtrl);
