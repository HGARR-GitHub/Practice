//In this kata you are required to, given a string, 
//replace every letter with its position in the alphabet.
//If anything in the text isn't a letter, ignore it and don't return it.

function alphabetPosition(text) {
  
  arrText = text.toUpperCase().split("")
  arrPos = arrText.map((value)=> {
    //Only Map char values that are between 65 and 90 (= A..Z)
    //Everything else just replace with a space
    return ((value.charCodeAt()-64)>0 & (value.charCodeAt()<91) ? value.charCodeAt()-64 : "")
  })
  //remove the array items that are ""
  arrFilter = arrPos.filter((value) => {return value != ""})
  //convert array to string and remplace the , by space
  return arrFilter.toString().replace(/,/g, " ")
  
}

console.log (alphabetPosition("z/az"))

// Variations:
// -1-
// let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');
//
// -2-
// return text.toLowerCase().replace(/[^a-z]/g,'').split('').map(x => alphabet.indexOf(x)+1).join(' ');
//
// -3-
// const alphabetPosition = text => text
//  .replace(/[^a-zA-Z]/g, '')
//  .toUpperCase()
//  .split``
//  .map(e => e.charCodeAt() - 64)
//  .join` `;