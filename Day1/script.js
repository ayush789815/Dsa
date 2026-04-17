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
// #5 Count Negative
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

// #6  Find  Smallest Number in a  Array
// function smallest(num) {
//     if(!Array.isArray(num)){
//         return false
//     }
//     if(num.length === 0){
//         return null
//     }
//     let smallest = Infinity
//     for (let i = 0; i < num.length; i++) {
//         if(typeof num[i] !== "number" || !Number.isFinite(num[i]))
//         if (num[i] < smallest) {
//             smallest = num[i]
//         }
//     }
//     console.log(smallest)
//     return smallest
// }
// smallest([1, 23, 6, 82, -12, -4])

// # 7 Find  Largest Number in a  Array
// function largest(num) {
//     let largest = -Infinity
//     for (let i = 0; i < num.length; i++) {
//         if (num[i] > largest) {
//             largest = num[i]
//         }
//     }
//     console.log(largest)
// }
// largest([1, 23, 6, 82, -12, -4])

// # 8. Binary Search
// function Search(nums, target) {
//     let left = 0
//     let right = nums.length - 1
//     while(left<=right){
//         let mid = Math.floor((left + right) / 2)
//         if(nums[mid] === target){
//             return mid
//         }
//         if(target > nums[mid]){
//             left = mid +1
//         }else{
//             right = mid - 1
//         }
//     }
//     return -1
// }
// console.log(Search([-1, 0, 3, 5, 9, 12], 12))
 // # 9  Sort An Array
//  function sortArray(nums){
//     for(let i = 0; i <=nums.length-1; i++ ){
//         for(let j = 0 ; j<nums.length - i -1; j++){
//             if(nums[j]>nums[j+1]){
//                 let temp = nums[j]
//                 nums[j] = nums[j+1]
//                 nums[j+1] = temp
//             }
//         }
//     }
//      console.log(nums)
//  }

//  sortArray([5,2,3,1])

function power(num){
    if(num<=0) return false
    while(num % 2 == 0){
        num = num / 2
    }
    console.log(num=== 1)
}
power(16)