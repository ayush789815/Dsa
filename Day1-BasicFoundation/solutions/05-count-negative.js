/**
 * Problem 5: Count Negative Numbers
 * 
 * Count how many negative integers appear in an array.
 * 
 * Example:
 *   countNegative([-1, 0, 1, -2, 3, -5, 2]) => 3
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function countNegative(arr) {
    let count = 0;

    // Iterate through array and count negative numbers
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }

    return count;
}

// Alternative: Using filter
function countNegativeAlt(arr) {
    return arr.filter(num => num < 0).length;
}

// Test cases
console.log('Testing countNegative function:');
console.log('countNegative([-1, 0, 1, -2, 3, -5, 2]) =', countNegative([-1, 0, 1, -2, 3, -5, 2])); // Output: 3
console.log('countNegative([1, 2, 3]) =', countNegative([1, 2, 3])); // Output: 0
console.log('countNegative([-1, -2, -3]) =', countNegative([-1, -2, -3])); // Output: 3
console.log('countNegative([0]) =', countNegative([0])); // Output: 0

module.exports = { countNegative, countNegativeAlt };
