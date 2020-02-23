//In this kata you are required to, given a string, 
//replace every letter with its position in the alphabet.
//If anything in the text isn't a letter, ignore it and don't return it.

function alphabetPosition(text) {
  
  arrText = text.toUpperCase().split("")
  arrPos = arrText.map((value)=> {
    //Only Map char values that are between 65 and 90 (= A..Z)
    //Everything else just replace with a space
    return ((value.charCodeAt()-64)>1 & (value.charCodeAt()<91) ? value.charCodeAt()-64 : "")
  })
  return arrPos.toString().replace(/,/g, " ")
  
}


console.log (alphabetPosition("fbca1d&%ef"))