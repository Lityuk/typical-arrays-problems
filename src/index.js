exports.min = function min(array) {
    if (Array.isArray(array) && array.length) {
        let currentValue = array[0];
        array.forEach(function (item, index) {
            if (currentValue > array[index]) {
                currentValue = array[index];
            }
        });
        return currentValue;
    }
    return 0;
};

exports.max = function max(array) {
    if (Array.isArray(array) && array.length) {
        let currentValue = array[0];
        array.forEach(function (item, index) {
          if (currentValue < array[index]) {
            currentValue = array[index];
          }
        });
        return currentValue;
      }
      return 0;
};

exports.avg = function avg(array) {
    if (Array.isArray(array) && array.length) {

        return array.reduce(function(previousValue, currentValue){
            return previousValue + currentValue}) / array.length;
      } else {
        return 0;
      }
    };
