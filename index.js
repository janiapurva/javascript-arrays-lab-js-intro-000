var kittens = ["Milo","Otis","Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(Ralph){
  kittens.push("Ralph")
}
function destructivelyPrependKitten(Bob){
  kittens.unshift("Bob")
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
function  appendKitten(){
return  [...kittens,"Broom"];
}
function prependKitten(){
  return ["Arnold",...kittens]
}
function removeLastKitten(){
  kittens.slice(0,3)
}
