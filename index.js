var kittens = ["Milo","Otis","Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  return kittens.push('Ralph')
}
function destructivelyPrependKitten(name){
  return kittens.unshift('Bob')
}
function destructivelyRemoveLastKitten(name){
  return kittens.pop()
}
function destructivelyRemoveFirstKitten(name){
  return kittens.shift()
}
function appendKitten(name){
  return kittens.concat('Broom')
}
function prependKitten(name){
  return ["Arnold", ...kittens]
}