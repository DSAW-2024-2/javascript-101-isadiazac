// Sum of Two Numbers
function sum(a, b) {
  if (typeof(a) === "string" || typeof(b) === "string") {
    console.log("Los datos de entrada no son adecuados");
  } else {
    return a + b;
  }
}

// Factorial of a Number
function factorial(n) {
  if (typeof(n) === "string") {
    console.log("Los datos de entrada no son adecuados");
  } else {
    fct=1
    for (i = 1; i <= n; i++) {
      f = i;
      fct = f * fct;
    }
    return fct;
  } 
}

// Find the Largest Number
function findLargest(arr) {
  let largest = -Infinity;
  for (let number of arr){
    if (typeof(number) === "string") {
      console.log("Los datos de entrada no son adecuados");
    } 
    else{
      if (number > largest) {
        largest = number;
      }
    }
    
  }
  return largest;
}
  

// Count Vowels in a String
function countVowels(str) {
  if (typeof(str) === "number") {
    console.log("Los datos de entrada no son adecuados");
  } else {
    let cont=0
    let vowels=["A","a","E", "e","I", "i","O", "o", "U", "u"];
    for (let i = 0; i < str.length; i++) {
      for (let j=0; j<10;j++){
        if(str[i]==vowels[j]){
          cont++;
        }
      }
  }
  return cont 
  }
}

// Check if a Number is Prime
function isPrime(n) {
  if (typeof(n) === "string") {
    console.log("Los datos de entrada no son adecuados");
  } else {
    let cont = 0;
    for (c = 1; c <= n; c++) {
      if (n % c == 0) {
        cont = cont + 1;
      }
    }
    if (cont <= 2) {
      return true;
    } else {
      return false;
    }

  } 
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
