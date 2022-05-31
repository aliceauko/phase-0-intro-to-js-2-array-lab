// Write your solution here!
const cats=["Milo", "Otis", "Garfield"]


function destructivelyAppendCat() {
    return cats.push("Ralph")
    
}

function  destructivelyPrependCat(){
    return cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    return cats.pop()
}

function destructivelyRemoveFirstCat(){
    return cats.shift()
}


/*function appendCat(name){
    var newArray = cats.slice();
    newArray.push(name)
    return newArray
  } */

  function appendCat(name){
    var newArray= [...cats,name];
    return newArray;
  }

  function prependCat(name){
    var newArray=[name, ...cats];
    return newArray
  }

  function removeLastCat(){
    var newArray= cats.slice(0,cats.length-1);
    return newArray;
  }
  
  function removeFirstCat(){
    var newArray= cats.slice(1)
    return newArray;
  }
  
  



