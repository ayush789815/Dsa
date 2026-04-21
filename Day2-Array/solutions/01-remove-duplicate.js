/**
 * Problem 1: Remove Duplicate Elements (In-Place)
 * 
 * Given a sorted array, remove duplicates in-place and return the count 
 * of unique elements. The first k elements should be unique.
 * 
 * Example:
 *   removeDuplicate([0,0,1,1,1,2,2,3,3,4]) => 5
 *   First 5 elements: [0,1,2,3,4]
 * 
 * Constraints:
 *   - Return the count of unique elements
 *   - Modify array in-place (O(1) space)
 *   - Input array is sorted
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function removeDuplicate(nums) {
    // Handle edge cases
    if (!Array.isArray(nums) || nums.length === 0) {
        return 0;
    }

    // Pointer for inserting unique elements
    let k = 1;

    // Iterate from second element onwards
    for (let i = 1; i < nums.length; i++) {
        // If current element is different from previous
        if (nums[i] !== nums[i - 1]) {
            // Place it at position k
            nums[k] = nums[i];
            // Move k forward
            k++;
        }
    }

    return k;
}

// Test cases
console.log('Testing removeDuplicate function:\n');

// Test 1
const arr1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const result1 = removeDuplicate(arr1);
console.log('Input: [0,0,1,1,1,2,2,3,3,4]');
console.log('Output:', result1);
console.log('Modified array (first', result1, 'elements):', arr1.slice(0, result1));
console.log('Expected: [0,1,2,3,4]\n');

// Test 2
const arr2 = [1, 1, 2];
const result2 = removeDuplicate(arr2);
console.log('Input: [1,1,2]');
console.log('Output:', result2);
console.log('Modified array (first', result2, 'elements):', arr2.slice(0, result2));
console.log('Expected: [1,2]\n');

// Test 3
const arr3 = [1, 2, 3];
const result3 = removeDuplicate(arr3);
console.log('Input: [1,2,3]');
console.log('Output:', result3);
console.log('Modified array (first', result3, 'elements):', arr3.slice(0, result3));
console.log('Expected: [1,2,3]\n');

// Test 4
const arr4 = [1];
const result4 = removeDuplicate(arr4);
console.log('Input: [1]');
console.log('Output:', result4);
console.log('Modified array (first', result4, 'elements):', arr4.slice(0, result4));
console.log('Expected: [1]\n');

// Test 5
const arr5 = [1, 1, 1, 1];
const result5 = removeDuplicate(arr5);
console.log('Input: [1,1,1,1]');
console.log('Output:', result5);
console.log('Modified array (first', result5, 'elements):', arr5.slice(0, result5));
console.log('Expected: [1]');

module.exports = { removeDuplicate };
