/**
 * Problem 1: Sum of Array
 * 
 * Calculate the sum of multiple numbers passed as arguments using rest parameters.
 * 
 * Example:
 *   sum(100, 200, 300, 400) => 1000
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function sum(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}

// Alternative: Using reduce
function sumAlt(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}

// Test cases
console.log('Testing sum function:');
console.log('sum(100, 200, 300, 400) =', sum(100, 200, 300, 400)); // Output: 1000
console.log('sum(1, 2, 3) =', sum(1, 2, 3)); // Output: 6
console.log('sum(5) =', sum(5)); // Output: 5
console.log('sum() =', sum()); // Output: 0

// Export for use in other files
module.exports = { sum, sumAlt };
