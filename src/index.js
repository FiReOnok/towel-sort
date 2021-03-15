
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var combinedArray = [];
  var forward = true;

  if (matrix === undefined) {
    return combinedArray;
  }

  matrix.forEach(element => {
    if (forward) {
      for (let i = 0; i < element.length; i++){
        combinedArray.push(element[i])
      }
      forward = false;
    } else {
      for (let i = element.length - 1; i >= 0; i--){
        combinedArray.push(element[i])
      }
      forward = true;
    }
  });
  return combinedArray;
}
