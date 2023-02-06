// Challenge 7 kyu
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  let xo = str.toLowerCase()
  let xCount = 0
  let oCount = 0
  for (let i = 0; i < xo.length; i++) {
    if (xo[i] === 'x') {
      xCount++
    } else if (xo[i] === 'o') {
      oCount++
    }
  }
  return xCount === oCount
}

//   given an integer or a floating-point number, find its opposite.

function opposite(number) {
  return -number
}

// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
  return x.replace(/ /g, "")
}

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

function getSum(a, b)
{
  let sum = 0
  if (a === b) {
    return a
  }
  if (a < b) {
    for (let i = a; i <= b; i++) {
      sum += i
    }
  } else {
    for (let i = b; i <= a; i++) {
      sum += i
    }
  }
  return sum
}