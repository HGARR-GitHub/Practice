// The main idea is to count all the occurring characters(UTF-8) in string. 
// If you have string like this aba then the result should be { 'a': 2, 'b': 1 }
//What if the string is empty ? Then the result should be empty object literal { }

arr = ['a','b','c','d','d','e','a','b','c','f','g','h','h','h','e','a'];
var newArr = arr.reduce(function(prev, cur) {
  prev[cur] = (prev[cur] || 0) + 1
  //console.log (prev)
  return prev
}, {});

console.log(newArr)