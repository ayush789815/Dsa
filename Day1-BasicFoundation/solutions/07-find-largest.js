/**
 * Problem 7: Find Largest Number in Array
 * 
 * Find the maximum value in an array.
 * 
 * Example:
 *   findLargest([1, 23, 6, 82, -12, -4]) => 82
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function findLargest(arr) {
    // Validate input is an array
    if (!Array.isArray(arr)) {
        console.error('Input must be an array');
        return false;
    }

    // Handle empty array
    if (arr.length === 0) {
        console.error('Array is empty');
        return null;
    }

    let largest = -Infinity;

    // Iterate through array to find maximum
    for (let i = 0; i < arr.length; i++) {
        // Validate that element is a valid number
        if (typeof arr[i] !== 'number' || !Number.isFinite(arr[i])) {
            console.warn(`Skipping invalid number at index ${i}: ${arr[i]}`);
            continue;
        }

        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest === -Infinity ? null : largest;
}

// Alternative: Using Math.max
function findLargestAlt(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    return Math.max(...arr);
}

// Test cases
console.log('Testing findLargest function:');
console.log('findLargest([1, 23, 6, 82, -12, -4]) =', findLargest([1, 23, 6, 82, -12, -4])); // Output: 82
console.log('findLargest([1]) =', findLargest([1])); // Output: 1
console.log('findLargest([5, 2, 8, 1, 9]) =', findLargest([5, 2, 8, 1, 9])); // Output: 9
console.log('findLargest([-5, -2, -8]) =', findLargest([-5, -2, -8])); // Output: -2
console.log('findLargest([]) =', findLargest([])); // Output: null

module.exports = { findLargest, findLargestAlt };
