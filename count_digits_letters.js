//count the letters and digits in a string

const random = '1ah3jd83j44'
const arRandom = random.split('')

const letters = arRandom.filter((item)=> isNaN(item)).length
const digits = arRandom.filter((item)=> !isNaN(item)).length
console.log (random)
console.log (`Count letters: ${letters} / Count digits: ${digits}`)

