const convertToCelsius = function(degrees) {
  degrees = (degrees - 32) * (5/9)
  if (parseInt(degrees) != degrees) {
    return Number(degrees.toFixed(1));
  }
  return degrees
};

const convertToFahrenheit = function(degrees) {
  degrees = degrees * (9/5) + 32;
  if (parseInt(degrees) != degrees) {
    return Number(degrees.toFixed(1));
  }
  return degrees
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
