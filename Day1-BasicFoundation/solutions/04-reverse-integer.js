/**
 * Problem 4: Reverse Integer
 * 
 * Reverse the digits of a signed integer.
 * 
 * Example:
 *   reverse(123) => 321
 *   reverse(-123) => -321
 *   reverse(120) => 21
 * 
 * Time Complexity: O(log n) - where n is the number
 * Space Complexity: O(1)
 */

function reverse(num) {
    // Store the sign of the number
    let sign = num < 0 ? -1 : 1;
    
    // Work with absolute value
    num = Math.abs(num);
    
    let reversed = 0;

    // Extract digits and build reversed number
    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }

    // Apply the original sign
    return reversed * sign;
}

// Test cases
console.log('Testing reverse function:');
console.log('reverse(123) =', reverse(123)); // Output: 321
console.log('reverse(-123) =', reverse(-123)); // Output: -321
console.log('reverse(120) =', reverse(120)); // Output: 21
console.log('reverse(0) =', reverse(0)); // Output: 0
console.log('reverse(-100) =', reverse(-100)); // Output: -1
console.log('reverse(1534236469) =', reverse(1534236469)); // Output: 9646324351

module.exports = { reverse };
