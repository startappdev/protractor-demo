(function() {
 "use strict";
    function doAddition () {
        console.log( "running calculator" );
        var calc = this;
        var visible = 1;
        var isPlus = ((calc.operator == "0"));
        if(typeof(isPlus) === "boolean") { isPlus = isPlus ? 1 : 0; }
        isPlus = Math.round(isPlus);
        var isMinus = ((calc.operator == "1"));
        if(typeof(isMinus) === "boolean") { isMinus = isMinus ? 1 : 0; }
        isMinus = Math.round(isMinus);
        var isMultiple = ((calc.operator == "2"));
        if(typeof(isMultiple) === "boolean") { isMultiple = isMultiple ? 1 : 0; }
        isMultiple = Math.round(isMultiple);
        var isDivide = ((calc.operator == "3"));
        if(typeof(isDivide) === "boolean") { isDivide = isDivide ? 1 : 0; }
        isDivide = Math.round(isDivide);
        var isModulo = ((calc.operator == "4"));
        if(typeof(isModulo) === "boolean") { isModulo = isModulo ? 1 : 0; }
        isModulo = Math.round(isModulo);
        if (isPlus) { 
            var total = ((calc.first + calc.second));
            if(typeof(total) === "boolean") { total = total ? 1 : 0; }
            total = Math.round(total);
        }
        if (isMinus) { 
            var total = ((calc.first - calc.second));
            if(typeof(total) === "boolean") { total = total ? 1 : 0; }
            total = Math.round(total);
        }
        if (isMultiple) { 
            var total = ((calc.first * calc.second));
            if(typeof(total) === "boolean") { total = total ? 1 : 0; }
            total = Math.round(total);
        }
        if (isDivide) { 
            var total = ((calc.first / calc.second));
            if(typeof(total) === "boolean") { total = total ? 1 : 0; }
            total = Math.round(total);
        }
        if (isModulo) { 
            var total = modulo(calc.first, calc.second);
        }
        eval("calc.latest = total");
        eval("calc.visible = visible");
    }
    function CalcCtrl () {
        var calc = this;
        var latest = 0;
        var operator = "0";
        eval("calc.latest = latest");
        eval("calc.operator = operator");
        eval("calc.doAddition = doAddition");
    }
    function modulo (dividend, divisor) {
        var quotient = 0;
        var remainder = 0;
        var product = 0;
        var quotient = ((dividend / divisor));
        if(typeof(quotient) === "boolean") { quotient = quotient ? 1 : 0; }
        quotient = Math.round(quotient);
        var product = ((divisor * quotient));
        if(typeof(product) === "boolean") { product = product ? 1 : 0; }
        product = Math.round(product);
        var remainder = ((dividend - product));
        if(typeof(remainder) === "boolean") { remainder = remainder ? 1 : 0; }
        remainder = Math.round(remainder);
        return remainder;
    }
    (function() {
        var calculator = angular.module("calculator");
        calculator.controller("CalcCtrl", CalcCtrl);
    }());
}());
//# sourceMappingURL=calc.arnoldc.js.map