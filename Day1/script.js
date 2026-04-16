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
