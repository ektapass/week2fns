//prompt1
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns 
// the largest of them. Use the if-then-else construct available in Javascript.
//  Do some googling to figure this out if you forget how conditionals work.
// const  maxOfTwoNumbers=(a,b)=>{
// if(a >= b){
//     return a
// }
// else{
//     return b
// }
// }
// large =maxOfTwoNumbers(4,5)
// console.log('largest number is ', large )
// prompt2  
//Define a function maxOfThree that takes three numbers as arguments
//  and returns the largest of them.
// const maxOfThree =(n1,n2,n3)=>{
//     if(n1>=n2 && n1>=n3){
//         return n1
//     }else if(n2>=n1 && n2>=n3){
//     return n2
//     }else
//     return n3 


//     }
//     console.log('largest integer is',maxOfThree(5,7,9))
//prompt3
// Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) 
// and returns true if it is a vowel,  false otherwise.

// const  isCharacterAVowel=(char)=>{
//     let vowel=["a","e","i","o","u"]
//     for(let i=0; i<= vowel.length;i++){
//        if(char === vowel[i]){
//         return true
//        }else
//        return false
//     }
// }
// console.log("character is" ,isCharacterAVowel("o"))

//       const  isCharacterAVowel=(char)=>{
//         //let vowel=["a","e","i","o","u"]
//         if(char ==="a"||char==="e"||char==="i"||char==="o"||char==="u" ){
//             return true
//         }else
//         return false

//       }

// console.log("character is vowel",isCharacterAVowel("a"))
//prompt4
// Define a function sumArray and a function multiplyArray that sums and 
// multiplies (respectively) all the numbers in an array of numbers.For example, 
// sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
// const sumArray =(n1,n2,n3,n4,n5)=>{
//  const arr1= [n1,n2,n3,n4,n5]
//  let sum=0
// //  let prod=0
//  for(i=0;i<=4;i++){
//     sum+=arr1[i]
//     // prod*=arr[i]

//  }
// return sum
// // return prod
// }
// const multiplyArray=(num1,num2,num3,num4,num5)=>{
// const arr2=[num1,num2,num3,num4,num5]
// let prod=0
// for(i=0;i<=4;i++){
//     prod*=arr2[i]
// }
// return prod

// }
// console.log(sumArray(1,2,3,4,5))
// console.log(multiplyArray(1,0,4,5,2))

//prompt5
// Write a function that returns the number of arguments passed to the function 
// when called
//let numberOfArguments=0

//const returnNumberOfArguments=(n1,n2,n3,n4)=>{
 // console.log(arguments.length) 
//  let n=0
//   for (let i = 1; i <= arguments.length; i++) {
//      n++
//     //base += Number(arguments[i]);
// }
// return n++
//}
 //returnNumberOfArguments(1,2,3,4)

//prompt6
// Define a function reverseString that computes the reversal of a string.
//  For example, reverseString("jag testar") should return the string "ratset gaj".
// const reverseString=(str)=>{
//  let newString=""
//  for(i=str.length-1;i>=0;i--){
//   newString+=str[i]
//  }
//  return newString
//  }
//  console.log(reverseString("hello world"))
//prompt7
// Write a function findLongestWord that takes an array of words and returns the length
//  of the longest one.
// function findLongestWord(arr) {

//   var lengthOfLongestWord = 0;
//   for(var i = 0; i <arr.length; i++){
//     if(arr[i].length >lengthOfLongestWord){
// 	lengthOfLongestWord = arr[i].length;
//      }
//   }
//   return lengthOfLongestWord;

// }
// console.log(findLongestWord(["happy","joyful","satishfaction","awesome"]));

 //prompt8
// Write a function filterLongWords that takes an array of words and
// a number i and returns the array of words that are longer than i characters long.
// const filterLongWords=(arr,n)=>{
// let arr1=[]
// for(let i=0;i<arr.length;i++){
//   if(arr[i].length>n){
//     arr1.push(arr[i])
//   }
// }
// return arr1
// }
// console.log(filterLongWords(['happy','awesome','joy','satishfaction','great'],5))


//bonus prompt
//prompt7
//Add a method reverseString (from question 6) to the object String so that 
//it is possible to call: "Per Scholas".reverseString().
const reverseString=(str)=>{
   let newString=""
   for(i=str.length-1;i>=0;i--){
    newString+=str[i] 
   }
   return newString
   }
   console.log(reverseString("hello world"))
   console.log("Per ScholAS".reverseString())

// Write a function that takes a string as argument and returns an object where:
// the keys are the characters that occur in the string
// the values are the number of occurrences for each letter, regardless of the case
// For example, calling the function with the string "Per Scholas" will return:

// {
//   a: 1,
//   c: 1,
//   e: 1,
//   h: 1,
//   l: 1,
//   o: 1,
//   p: 1,
//   r: 1,
//   s: 2,
// }