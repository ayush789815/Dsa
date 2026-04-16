// # 1.Sum of Array

// function sum(...args) {
//     let sums = 0
//     for (let i = 0; i <= args.length - 1; i++) {
//         sums += args[i]
//     }
//     return sums
// }

// console.log(sum(100, 200, 300, 400))


// # 2. Second Largest Digit In String
// var secondHighest = function (s) {
//     let first = -1
//     let second = -1

//     for (let i = 0; i < s.length; i++) {
//         let char = s[i]
//         if (!isNaN(char)) {
//             let num = Number(char)
//             if (num > first) {
//                 second = first
//                 first = num
//             } else if (num < first && num > second) {
//                 second = num
//             }
//         }
//     }
//     console.log(second)
//     return second
// };
// secondHighest("dfa12321afd")

// # 3 Panlindrome Number
// function palindrome(num) {
//     if (num < 0 || (num % 10 === 0 && num !== 0)) {
//         return false;
//     }

//     let original = num
//     let reverse = 0
//     for (; num > 0; num = Math.floor(num / 10)) {
//         let digit = num % 10
//         reverse = reverse * 10 + digit
//     }
//     return original === reverse
// }
// console.log(palindrome(-121))
// console.log(palindrome(121));
// console.log(palindrome(123)); 
// 4  Reverse Integer

// function  reverse(num){
//     let sign = num < 0 ? -1 : 1
//    num =  Math.abs(num)
//     let reverse = 0
//     for(;num>0; num = Math.floor(num / 10)){
//         let digit = num % 10
//         reverse = reverse * 10 + digit
//     }
//     console.log(reverse * sign )
//     return reverse * sign 
// }
// reverse(1232)
// 5 Count Negative
// function countNegative(num){
//     let count  = 0
//     for(let i = 0; i< num.length; i++){
//           if(num[i] < 0){
//             count++
//           }  
//     }
//     console.log(count)
//     return count
// }
// countNegative([-1,0,1,-2,3,-5,2])