/**
 * Problem 6: Find Smallest Number in Array
 * 
 * Find the minimum value in an array with proper validation.
 * 
 * Example:
 *   findSmallest([1, 23, 6, 82, -12, -4]) => -12
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function findSmallest(arr) {
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

    let smallest = Infinity;

    // Iterate through array to find minimum
    for (let i = 0; i < arr.length; i++) {
        // Validate that element is a valid number
        if (typeof arr[i] !== 'number' || !Number.isFinite(arr[i])) {
            console.warn(`Skipping invalid number at index ${i}: ${arr[i]}`);
            continue;
        }

        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest === Infinity ? null : smallest;
}

// Alternative: Using Math.min
function findSmallestAlt(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    return Math.min(...arr);
}

// Test cases
console.log('Testing findSmallest function:');
console.log('findSmallest([1, 23, 6, 82, -12, -4]) =', findSmallest([1, 23, 6, 82, -12, -4])); // Output: -12
console.log('findSmallest([1]) =', findSmallest([1])); // Output: 1
console.log('findSmallest([5, 2, 8, 1, 9]) =', findSmallest([5, 2, 8, 1, 9])); // Output: 1
console.log('findSmallest([-5, -2, -8]) =', findSmallest([-5, -2, -8])); // Output: -8
console.log('findSmallest([]) =', findSmallest([])); // Output: null

module.exports = { findSmallest, findSmallestAlt };
