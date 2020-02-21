/*
The goal of this exercise is to convert a string to a new string 
where each character in the new string is "(" if that character appears 
only once in the original string, or ")" if that character appears more 
than once in the original string. Ignore capitalization when determining 
if a character is a duplicate.

Example
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/

const strNew = "ssabb"
let arrNew = strNew.split("")

let arrEncoded =  arrNew.map((item,pos,arr) => {
  let count = 0
  for (i=0;(i<arr.length) ;i++){
   if (item == arr[i]){
      count++
   }
  }
  return ((count==1) ? "(" : ")")
})

console.log (arrEncoded)
