var iterativeLog = (array) => {
  array.forEach(function(element, index, array){
    console.log(`${index}: ${element}`)
  })
}

var iterate = (callback) => {
  var array = [1,2,3,4,5,6]
  array.forEach(callback)
  return array
}

var doToArray = (array, callback) => {
  array.forEach(callback)
}
