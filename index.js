function getCode(array) {
  var result = 0;
  for(var i=0; i<array.length;i++){
    var leftIndx = array.indexOf(array[i]-1)
    var rightIndx = array.indexOf(array[i]+1)
    
    if(leftIndx !== -1 && leftIndx > i) {
      result++;
    }

    if (rightIndx !== -1 && rightIndx > i ) {
      result++;
    }
  }
  return result;
}
